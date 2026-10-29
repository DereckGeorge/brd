"""Import team text and matching embedded portraits from the supplied Word document."""
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
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/Users/dereck/Downloads/OUR TEAM 3.docx")
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main", "a": "http://schemas.openxmlformats.org/drawingml/2006/main", "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}
SLUGS = ["joseph-s-mayunga", "vivaoliva-u-shoo", "guido-a-uhinga", "hamza-a-farahan", "johnston-weston", "daudi-fufuji", "simon-m-machera"]

def text(node):
    return re.sub(r"\s+", " ", "".join(part.text or "" for part in node.findall(".//w:t", NS))).strip()

def main():
    members = []
    with ZipFile(SOURCE) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
        relations = {r.attrib["Id"]: r.attrib["Target"] for r in ET.fromstring(archive.read("word/_rels/document.xml.rels"))}
        heading = None
        for child in root.find("w:body", NS):
            if child.tag.endswith("}p") and ":" in text(child) and len(text(child)) > 20:
                heading = text(child)
            if not child.tag.endswith("}tbl"):
                continue
            if not heading:
                raise ValueError("Team table has no associated name and role")
            name, role = [part.strip() for part in heading.split(":", 1)]
            slug = SLUGS[len(members)]
            cells = child.findall(".//w:tc", NS)
            bio_cell = max(cells, key=lambda cell: len(text(cell)))
            biography = [text(p) for p in bio_cell.findall(".//w:p", NS) if text(p)]
            biography = [p.replace("Ms. shoo", "Ms. Shoo").replace("specilist", "specialist").replace("Jonston", "Johnston") for p in biography]
            if slug == "guido-a-uhinga" and biography[-1].startswith("projects and consultancy projects"):
                biography[-1] = "He has contributed to projects and consultancy assignments related to applications of GIS and remote sensing in disaster risk management and climate change in Tanzania and abroad."
            picture = child.find(".//a:blip", NS)
            image_path = relations[picture.attrib["{" + NS["r"] + "}embed"]]
            original = archive.read("word/" + image_path)
            portrait = ImageOps.exif_transpose(Image.open(BytesIO(original))).convert("RGB")
            portrait.thumbnail((1000, 1000))
            target = ROOT / f"public/brd/team/{slug}.webp"
            target.parent.mkdir(parents=True, exist_ok=True)
            portrait.save(target, "WEBP", quality=92, method=6)
            members.append({"slug": slug, "name": name, "role": role.rstrip(". "), "image": f"/brd/team/{slug}.webp", "biography": biography, "sourceImage": image_path, "sourceSha256": hashlib.sha256(original).hexdigest()})
            heading = None
    if len(members) != 7:
        raise ValueError("Expected seven team members")
    (ROOT / "app/data/team.json").write_text(json.dumps(members, ensure_ascii=True, indent=2) + "\n")
    print("Imported seven biographies and their associated portraits")

if __name__ == "__main__":
    main()
