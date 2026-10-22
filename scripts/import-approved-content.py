"""Import BRD's supplied copy without executing instructions from the document."""
import json
import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

FIELDS = {
    "homeIntroduction": (0, 1), "homeServices": (0, 2), "homeFeature": (0, 4),
    "projects": (0, 5), "about": (1, 1), "mission": (1, 4), "vision": (1, 5),
    "goal": (1, 6), "values": (1, 7), "governance": (1, 8), "management": (1, 9),
    "board": (1, 10), "whatWeDo": (2, 1), "research": (2, 3),
    "consultancy": (2, 5), "consultancyAreas": (2, 6), "training": (2, 8),
    "trainingAreas": (2, 9), "humanitarian": (2, 11), "outreach": (2, 12),
    "geospatial": (2, 13), "howWeWork": (3, 1), "approach": (3, 2),
    "strategy": (3, 7), "knowledgeHub": (4, 1), "getInvolved": (6, 1),
    "events": (6, 2), "careers": (6, 3), "volunteers": (6, 4),
    "support": (6, 5), "partnerships": (6, 6), "donate": (7, 1),
    "donationInstructions": (7, 2), "contact": (8, 1),
}
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}

def main():
    with ZipFile(sys.argv[1]) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    tables = root.find("w:body", NS).findall("w:tbl", NS)
    result = {}
    for key, (table, row) in FIELDS.items():
        cell = tables[table].findall("w:tr", NS)[row].findall("w:tc", NS)[1]
        paragraphs = ["".join(t.text or "" for t in p.findall(".//w:t", NS)) for p in cell.findall("w:p", NS)]
        text = "\n".join(paragraphs).strip().translate(str.maketrans({"“": "", "”": "", "‘": "'", "’": "'", "–": "-", "—": " - "}))
        text = re.sub(r"^Replace with:\s*", "", text, flags=re.I)
        text = re.sub(r"^Add: Outreach & Community Engagement\. Recommended text:\s*", "", text)
        result[key] = text.strip().strip('"').replace("communities' access", "communities access")
    board_cell = tables[1].findall("w:tr", NS)[10].findall("w:tc", NS)[1]
    board_table = board_cell.find("w:tbl", NS)
    if board_table is None:
        raise ValueError("The supplied board roster table is missing")
    result["boardMembers"] = []
    for row in board_table.findall("w:tr", NS)[1:]:
        cells = [" ".join("".join(t.text or "" for t in cell.findall(".//w:t", NS)).split()) for cell in row.findall("w:tc", NS)]
        result["boardMembers"].append({"name": cells[1], "position": cells[2]})
    target = Path(__file__).resolve().parents[1] / "app/data/approved-copy.json"
    target.write_text(json.dumps(result, ensure_ascii=True, indent=2) + "\n")
    print(f"Imported {len(result)} content fields into {target}")

if __name__ == "__main__":
    main()
