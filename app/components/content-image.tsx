import Image from "next/image";
import type { ContentItem } from "../data/content";

type Props = {
  src: string;
  alt: string;
  panel?: ContentItem["imagePanel"];
  sizes?: string;
  preload?: boolean;
  loading?: "eager" | "lazy";
};

export default function ContentImage({ src, alt, panel, sizes = "90vw", preload = false, loading }: Props) {
  if (!panel) return <Image src={src} alt={alt} fill sizes={sizes} preload={preload} loading={loading} />;
  // Display only the requested photo panel, retaining the supplied source unchanged.
  return <div className={`image-panel image-panel-${panel}`}><div className="image-panel-crop"><Image src={src} alt={alt} width={1536} height={1024} unoptimized preload={preload} loading={loading} /></div></div>;
}
