import json
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup


BASE = "https://www.yashodahospitals.com/specialities/"
OUT = Path(__file__).resolve().parents[1] / "src" / "data" / "specialities-scraped.json"


def clean(text: str) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    return text


def slug_from_url(url: str) -> str:
    path = urlparse(url).path.rstrip("/")
    return path.split("/")[-1]


def get_speciality_urls(session: requests.Session) -> list[str]:
    html = session.get(BASE, timeout=30).text
    soup = BeautifulSoup(html, "html.parser")
    urls = set()
    for a in soup.select("a[href]"):
        href = a.get("href", "")
        abs_url = urljoin(BASE, href)
        parsed = urlparse(abs_url)
        if parsed.netloc != "www.yashodahospitals.com":
            continue
        path = parsed.path.rstrip("/")
        if not path.startswith("/specialities"):
            continue
        if path in ("/specialities",):
            continue
        if any(
            x in path
            for x in (
                "/doctors",
                "/diseases-conditions",
                "/treatments-surgeries",
                "/technology-facilities",
                "/testimonials",
            )
        ):
            continue
        urls.add(f"https://www.yashodahospitals.com{path}/")
    return sorted(urls)


def extract_page(session: requests.Session, url: str) -> dict:
    html = session.get(url, timeout=30).text
    soup = BeautifulSoup(html, "html.parser")
    title = clean((soup.find("h1") or soup.find("title")).get_text(" ", strip=True))

    # remove obvious nav/footer noise
    for tag in soup(["script", "style", "noscript", "header", "footer"]):
        tag.decompose()

    lines = []
    for el in soup.find_all(["h1", "h2", "h3", "h4", "h5", "p", "li"]):
        t = clean(el.get_text(" ", strip=True))
        if not t or len(t) < 3:
            continue
        if t in ("Enquire Now", "Get a Free Second Opinion", "Send", "Δ"):
            continue
        lines.append(t)

    # de-dup consecutive duplicates
    deduped = []
    for t in lines:
        if not deduped or deduped[-1] != t:
            deduped.append(t)

    # overview: first 6 useful descriptive paragraphs
    overview = []
    for t in deduped:
        if len(t) > 80 and not t.endswith("?"):
            overview.append(t)
        if len(overview) >= 6:
            break

    # sections from headings that look relevant
    section_heads = []
    for t in deduped:
        low = t.lower()
        if any(
            key in low
            for key in (
                "overview",
                "diseases",
                "conditions",
                "treatments",
                "surgeries",
                "technology",
                "facilities",
                "doctor talk",
                "health blogs",
                "health talk",
            )
        ):
            section_heads.append(t)
    section_heads = list(dict.fromkeys(section_heads))[:12]

    # faq extraction: question line followed by next long line
    faqs = []
    for i, t in enumerate(deduped):
        if t.endswith("?") and len(t) > 10:
            answer = ""
            for j in range(i + 1, min(i + 6, len(deduped))):
                if len(deduped[j]) > 40 and not deduped[j].endswith("?"):
                    answer = deduped[j]
                    break
            if answer:
                faqs.append({"q": t, "a": answer})
        if len(faqs) >= 8:
            break

    return {
        "sourceUrl": url,
        "title": title,
        "slug": slug_from_url(url),
        "overview": overview,
        "sectionHighlights": section_heads,
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

    urls = get_speciality_urls(session)
    pages = []
    for url in urls:
        try:
            pages.append(extract_page(session, url))
        except Exception as exc:
            pages.append(
                {
                    "sourceUrl": url,
                    "title": "",
                    "slug": slug_from_url(url),
                    "overview": [],
                    "sectionHighlights": [],
                    "faqs": [],
                    "error": str(exc),
                }
            )

    OUT.write_text(json.dumps({"count": len(pages), "pages": pages}, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(pages)} speciality pages to {OUT}")


if __name__ == "__main__":
    main()
