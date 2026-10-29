import Image from "next/image";
export const metadata = { title: "Get Involved" };
export default function Page() { return <div className="section-overview-photo container"><Image src="/brd/photos/brd-workshop.webp" alt="Participants at a BRD workshop" width={512} height={384} sizes="(max-width: 600px) 90vw, 800px" /></div>; }
