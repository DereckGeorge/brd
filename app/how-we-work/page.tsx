import Image from "next/image";
export const metadata = { title: "How We Work" };
export default function Page() { return <div className="section-overview-photo container"><Image src="/brd/photos/community-meeting.webp" alt="Participants in a BRD meeting" width={2000} height={1500} sizes="(max-width: 600px) 90vw, 800px" /></div>; }
