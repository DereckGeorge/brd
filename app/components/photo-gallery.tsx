import Image from "next/image";
import media from "../data/brd-media.json";

export default function PhotoGallery({ ids }: { ids: string[] }) {
  const photos = ids.map((id) => media.photos.find((photo) => photo.id === id)).filter((photo) => !!photo);
  if (!photos.length) return null;
  return <section className="photo-gallery container" aria-labelledby={`gallery-${ids[0]}`}><h2 id={`gallery-${ids[0]}`}>In practice</h2><p>Photographs supplied by BRD Tanzania.</p><div className="photo-gallery-grid">{photos.map((photo) => <figure key={photo.id}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" /><figcaption>{photo.alt}</figcaption></figure>)}</div></section>;
}
