"""Prepare user-supplied website media without cropping, recolouring or upscaling."""
import hashlib
import json
import shutil
from io import BytesIO
from pathlib import Path
from zipfile import ZipFile

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PHOTOS = [
    ("BRD photo.jpg", "brd-workshop", "A facilitator presenting to participants seated around a workshop table"),
    ("IMAG0449.jpg", "training-discussion", "Participants taking part in a group training discussion"),
    ("photo Dar.jpeg", "dar-es-salaam", "An aerial view of Dar es Salaam and its waterfront"),
    ("Picture2.jpg", "workshop-presentation", "A presenter speaking beside BRD workshop banners"),
    ("Picture3.jpg", "workshop-session", "Workshop participants listening to a facilitator"),
    ("Picture4.jpg", "workshop-participants", "Participants taking notes during a workshop"),
    ("Picture5.jpg", "technical-presentation", "A facilitator delivering a technical presentation"),
    ("Picture6.jpg", "group-learning", "Participants seated together during a learning session"),
    ("Picture7.jpg", "facilitated-discussion", "A facilitator leading a group discussion"),
    ("Picture8.jpg", "workshop-panel", "Participants seated at a workshop table"),
    ("SAM_1045.JPG", "community-meeting", "Participants gathered around a table for a meeting"),
]
PARTNERS = [
    ("Redcross.png", "red-cross", "Red Cross Tanzania"),
    ("RAPID.jpeg", "rapid", "RAPID Tanzania"),
    ("DMD_PMO.jpeg", "dmd-pmo", "Government of Tanzania - DMD-PMO"),
    ("PSSSF.jpg", "psssf", "Public Service Social Security Fund (PSSSF)"),
]

def prepare(archive_path, entries, folder):
    results = []
    with ZipFile(archive_path) as archive:
        files = {Path(info.filename).name: info for info in archive.infolist() if not info.is_dir()}
        for filename, slug, description in entries:
            raw = archive.read(files[filename])
            im = ImageOps.exif_transpose(Image.open(BytesIO(raw)))
            im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
            im.thumbnail((2000, 2000))
            target = ROOT / "public/brd" / folder / f"{slug}.webp"
            target.parent.mkdir(parents=True, exist_ok=True)
            im.save(target, "WEBP", quality=90, method=6)
            results.append({"id": slug, "src": f"/brd/{folder}/{slug}.webp", "alt": description if folder == "photos" else f"{description} logo", "name": description, "width": im.width, "height": im.height, "sourceFile": filename, "sourceArchive": Path(archive_path).name, "sourceSha256": hashlib.sha256(raw).hexdigest()})
    return results

def prepare_gndr():
    source = Path("/Users/dereck/Downloads/GNDR.png")
    raw = source.read_bytes()
    image = Image.open(BytesIO(raw))
    target = ROOT / "public/brd/partners/gndr.png"
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, target)
    name = "Global Network of Civil Society Organisations for Disaster Reduction (GNDR)"
    return {"id": "gndr", "src": "/brd/partners/gndr.png", "alt": f"{name} logo", "name": name, "width": image.width, "height": image.height, "sourceFile": source.name, "sourceArchive": None, "sourceSha256": hashlib.sha256(raw).hexdigest()}

def main():
    result = {
        "provenance": "Original archives supplied by the user on 2026-10-23; GNDR logo added on 2026-10-29. No identities or project associations inferred from photographs. Logos preserved as supplied; RAPID source is already cropped on its right edge.",
        "photos": prepare("/Users/dereck/Downloads/BRD_PHOTOS.zip", PHOTOS, "photos"),
        "partners": prepare("/Users/dereck/Downloads/BRD_Partners.zip", PARTNERS, "partners") + [prepare_gndr()],
    }
    (ROOT / "app/data/brd-media.json").write_text(json.dumps(result, ensure_ascii=True, indent=2) + "\n")
    print(f"Prepared {len(result['photos'])} photographs and {len(result['partners'])} partner logos")

if __name__ == "__main__":
    main()
