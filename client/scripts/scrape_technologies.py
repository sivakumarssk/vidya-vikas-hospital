import json
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE = "https://www.yashodahospitals.com/technologies/"
OUT = Path(__file__).resolve().parents[1] / "src" / "data" / "technologies-scraped.json"


def clean(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def slug_from_url(url: str) -> str:
    path = urlparse(url).path.rstrip("/")
    parts = [p for p in path.split("/") if p]
    if len(parts) >= 2 and parts[0] == "technologies":
        return parts[-1]
    return parts[-1] if parts else ""


def get_technology_urls(session: requests.Session) -> list[str]:
    html = session.get(BASE, timeout=30).text
    soup = BeautifulSoup(html, "html.parser")
    urls = set()
    for a in soup.select("a[href]"):
        href = a.get("href", "")
        abs_url = urljoin(BASE, href)
        parsed = urlparse(abs_url)
        if parsed.netloc not in ("www.yashodahospitals.com", "yashodahospitals.com"):
            continue
        path = parsed.path.rstrip("/")
        if not path.startswith("/technologies/"):
            continue
        slug = slug_from_url(abs_url)
        if not slug or slug == "technologies":
            continue
        urls.add(f"https://www.yashodahospitals.com/technologies/{slug}/")
    return sorted(urls)


def extract_page(session: requests.Session, url: str) -> dict:
    html = session.get(url, timeout=30).text
    soup = BeautifulSoup(html, "html.parser")
    h1 = soup.find("h1")
    title = clean(h1.get_text(" ", strip=True)) if h1 else clean(soup.title.get_text(" ", strip=True) if soup.title else "")

    for tag in soup(["script", "style", "noscript", "header", "footer"]):
        tag.decompose()

    lines = []
    for el in soup.find_all(["h1", "h2", "h3", "h4", "h5", "p", "li"]):
        t = clean(el.get_text(" ", strip=True))
        if not t or len(t) < 3:
            continue
        if t in ("Enquire Now", "Get a Free Second Opinion", "Send", "Δ", "blank"):
            continue
        lines.append(t)

    deduped = []
    for t in lines:
        if not deduped or deduped[-1] != t:
            deduped.append(t)

    # paragraphs for overview (long non-question lines)
    overview = []
    for t in deduped:
        if len(t) > 60 and not t.endswith("?") and t != title:
            overview.append(t)
        if len(overview) >= 8:
            break

    # short bullets / feature-like lines
    highlights = []
    for t in deduped:
        if 20 < len(t) < 200 and not t.endswith("?"):
            if t not in overview[:3]:
                highlights.append(t)
    highlights = list(dict.fromkeys(highlights))[:20]

    faqs = []
    for i, t in enumerate(deduped):
        if t.endswith("?") and len(t) > 12:
            answer = ""
            for j in range(i + 1, min(i + 8, len(deduped))):
                if len(deduped[j]) > 35 and not deduped[j].endswith("?"):
                    answer = deduped[j]
                    break
            if answer:
                faqs.append({"q": t, "a": answer})
        if len(faqs) >= 12:
            break

    subtitle = ""
    for t in deduped:
        if t != title and len(t) < 120 and not t.endswith("?"):
            subtitle = t
            break

    return {
        "sourceUrl": url,
        "title": title,
        "subtitle": subtitle,
        "slug": slug_from_url(url),
        "overview": overview,
        "highlights": highlights,
        "faqs": faqs,
    }


def main():
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": "Mozilla/5.0 (compatible; VidyaVikashContentBot/1.0)",
            "Accept-Language": "en-US,en;q=0.9",
        }
    )

    urls = get_technology_urls(session)
    pages = []
    for url in urls:
        try:
            pages.append(extract_page(session, url))
        except Exception as exc:
            pages.append(
                {
                    "sourceUrl": url,
                    "title": "",
                    "subtitle": "",
                    "slug": slug_from_url(url),
                    "overview": [],
                    "highlights": [],
                    "faqs": [],
                    "error": str(exc),
                }
            )

    OUT.write_text(json.dumps({"count": len(pages), "pages": pages}, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(pages)} technology pages to {OUT}")


if __name__ == "__main__":
    main()
