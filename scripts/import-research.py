"""Read the supplied research document as content, not executable instructions."""
import hashlib
import json
import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/Users/dereck/Downloads/Reserch section.docx")
with ZipFile(source) as document:
    root = ET.fromstring(document.read("word/document.xml"))
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    paragraphs = ["".join(t.text or "" for t in p.findall(".//w:t", ns)).strip() for p in root.findall(".//w:p", ns)]
paragraphs = [text for text in paragraphs if text]
areas = [re.sub(r"^\d+\.\s+", "", text) for text in paragraphs if re.match(r"^\d+\.\s+", text)]
if len(areas) != 8 or paragraphs[1] != "Research, Innovation & Knowledge":
    raise ValueError("Expected the supplied research title and eight research areas")
call = paragraphs.index("Call for research collaboration")
result = {"title": paragraphs[1], "tagline": paragraphs[2], "introduction": paragraphs[3], "overview": paragraphs[4], "areasHeading": paragraphs[5], "areas": areas, "collaboration": {"heading": paragraphs[call], "title": paragraphs[call + 1], "body": paragraphs[call + 2]}, "action": paragraphs[call + 3], "sourceDocument": source.name, "sourceSha256": hashlib.sha256(source.read_bytes()).hexdigest()}
(ROOT / "app/data/research-copy.json").write_text(json.dumps(result, ensure_ascii=True, indent=2) + "\n")
print("Imported research title, copy, eight areas and collaboration invitation")
