from pathlib import Path
import mimetypes

import requests


ASSETS = {
    "logo": "https://www.figma.com/api/mcp/asset/71c5a860-089f-42e8-879f-85f8912aca00",
    "hero-avatar-1": "https://www.figma.com/api/mcp/asset/5234da51-2f7f-45a4-8896-1a5d9c7bdc03",
    "hero-avatar-2": "https://www.figma.com/api/mcp/asset/5537f076-86d6-49d4-9633-3c32800a4515",
    "hero-building-remote": "https://www.figma.com/api/mcp/asset/060067d6-aab6-49dd-a96e-4c1c83d5fdf4",
    "excellence-card-1": "https://www.figma.com/api/mcp/asset/2c887dcc-cbc0-4eeb-a08f-bb526ac34d99",
    "excellence-card-2": "https://www.figma.com/api/mcp/asset/8989475f-113f-4550-9869-f77adc797678",
    "excellence-card-3": "https://www.figma.com/api/mcp/asset/25525baf-112e-45f9-a290-5c00555a4c36",
    "excellence-card-4": "https://www.figma.com/api/mcp/asset/bbd841f1-f7ae-4748-a169-d960659999e9",
    "excellence-card-5": "https://www.figma.com/api/mcp/asset/8e553d5e-7b84-4139-be39-02579a138b5b",
    "excellence-card-6": "https://www.figma.com/api/mcp/asset/94c745b9-f296-42b1-a9a1-3d8f6f7ad303",
    "about-video-thumb": "https://www.figma.com/api/mcp/asset/8b617848-76b2-4311-a1b1-16f27314c05d",
    "about-play": "https://www.figma.com/api/mcp/asset/73acfd1c-6545-450d-a90a-3fc8268901a2",
    "about-hero-image": "https://www.figma.com/api/mcp/asset/251a2bf9-a298-459a-94d6-4e56cc189aeb",
    "about-story-image": "https://www.figma.com/api/mcp/asset/0b6de0d7-8b37-4685-aa1c-931d2a7ba4a5",
    "contact-map": "https://www.figma.com/api/mcp/asset/a7f8849d-cdb9-45ea-b942-0e83524caa12",
    "appointment-hero": "https://www.figma.com/api/mcp/asset/7f499fa7-693d-4b9d-9ba8-d36ae0f69b71",
    "doctor-vikram-malhotra": "https://www.figma.com/api/mcp/asset/23097f15-b852-4c7c-ba11-63a4a676a136",
    "doctor-ananya-sharma": "https://www.figma.com/api/mcp/asset/b335a173-d5d2-4c34-9763-d84eb5ead822",
    "doctor-rajesh-varma": "https://www.figma.com/api/mcp/asset/6f0cf0c0-6a44-4f7b-a59b-10fb2ca8246d",
    "doctor-meera-iyer": "https://www.figma.com/api/mcp/asset/d4ddd5e6-a4ea-48bf-a049-27fdd0d9e87c",
    "doctor-sameer-khan": "https://www.figma.com/api/mcp/asset/d60ef9a8-a2f9-4c13-88c8-f85449c59061",
    "doctor-priya-desai": "https://www.figma.com/api/mcp/asset/e5fde07e-2240-4c50-b258-e982aff631e4",
}


def ext_from_content_type(content_type: str) -> str:
    if not content_type:
        return ".bin"
    content_type = content_type.split(";")[0].strip().lower()
    ext = mimetypes.guess_extension(content_type) or ".bin"
    if ext == ".jpe":
        return ".jpg"
    return ext


def main():
    out_dir = Path(__file__).resolve().parents[1] / "src" / "assets" / "figma"
    out_dir.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update({"User-Agent": "Mozilla/5.0"})

    for name, url in ASSETS.items():
        response = session.get(url, timeout=60)
        response.raise_for_status()
        ext = ext_from_content_type(response.headers.get("content-type", ""))
        path = out_dir / f"{name}{ext}"
        path.write_bytes(response.content)
        print(f"saved {path.name}")


if __name__ == "__main__":
    main()
