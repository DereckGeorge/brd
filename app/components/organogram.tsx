import Image from "next/image";
import { Expand } from "lucide-react";

const chart = "/brd/BRD_Tanzania_Organogram.png";

export default function Organogram() {
  return <section className="team-organogram container" aria-label="BRD organisational structure"><a className="organogram-image-link" href={chart} target="_blank" rel="noopener noreferrer" aria-label="View BRD organisational chart at full size"><Image src={chart} alt="BRD Tanzania organisational structure: Board of Directors oversees the Executive Director, who oversees the Director of Finance, Managing Director and Director of Operations. The Managing Director oversees the Research, Training and Consultancy Coordinators." width={1280} height={720} unoptimized /></a><a href={chart} target="_blank" rel="noopener noreferrer" className="text-link organogram-expand">View full-size chart<Expand size={18} /></a></section>;
}
