"""Import board biographies and filename-matched portraits from BRD's archive."""
import hashlib
import json
import re
import sys
from io import BytesIO
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/Users/dereck/Downloads/BOARD OF DIRECTORS.zip")
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
PORTRAITS = {
    "Ms Nyambiri Kimacha": ("nyambiri-kimacha", "Nyambiri_N_Kimacha_6-2021_165x165.webp"),
    "Mr Charles Msangi": ("charles-msangi", "Charles Msangi.jpeg"),
    "Mr Rockefeller Madamba": ("rockefeller-madamba", "ROCKFELLER.jpeg"),
    "Ms Vivaoliva U. Shoo": ("vivaoliva-u-shoo", "Ms VIVa.jpg"),
    "Dr Joseph S. Mayunga": ("joseph-s-mayunga", "DR Mayunga.png"),
}


def digest(data):
    return hashlib.sha256(data).hexdigest()


def main():
    with ZipFile(SOURCE) as archive:
        document_path = next(name for name in archive.namelist() if name.endswith(".docx") and not name.startswith("__MACOSX/"))
        document_bytes = archive.read(document_path)
        with ZipFile(BytesIO(document_bytes)) as document:
            root = ET.fromstring(document.read("word/document.xml"))
            paragraphs = [re.sub(r"\s+", " ", "".join(t.text or "" for t in p.findall(".//w:t", NS))).strip() for p in root.findall(".//w:p", NS)]
        paragraphs = [text for text in paragraphs if text]
        members = []
        for index, text in enumerate(paragraphs):
            if text not in PORTRAITS:
                continue
            slug, filename = PORTRAITS[text]
            end = next((i for i in range(index + 2, len(paragraphs)) if paragraphs[i] in PORTRAITS), len(paragraphs))
            biography = paragraphs[index + 2:end]
            if not biography or len(" ".join(biography)) < 100:
                raise ValueError(f"Missing biography for {text}")
            source_image = next(name for name in archive.namelist() if Path(name).name == filename and not name.startswith("__MACOSX/"))
            image_bytes = archive.read(source_image)
            portrait = ImageOps.exif_transpose(Image.open(BytesIO(image_bytes))).convert("RGB")
            portrait.thumbnail((1000, 1000))
            # A content-based name also refreshes cached shared team portraits.
            image_path = f"/brd/board/{slug}-{digest(image_bytes)[:10]}.webp"
            target = ROOT / f"public{image_path}"
            target.parent.mkdir(parents=True, exist_ok=True)
            portrait.save(target, "WEBP", quality=92, method=6)
            members.append({"slug": slug, "name": text, "role": paragraphs[index + 1], "image": image_path, "biography": biography, "sourceArchive": SOURCE.name, "sourceDocument": document_path, "sourceDocumentSha256": digest(document_bytes), "sourceImage": source_image, "sourceSha256": digest(image_bytes), "width": portrait.width, "height": portrait.height})
    if len(members) != len(PORTRAITS):
        raise ValueError("Expected five board members with matching portraits")
    (ROOT / "app/data/board.json").write_text(json.dumps(members, ensure_ascii=True, indent=2) + "\n")
    print("Imported five board members and matched portraits")


if __name__ == "__main__":
    main()
