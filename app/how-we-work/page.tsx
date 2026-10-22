import SectionOverview from "../components/section-overview";
import copy from "../data/approved-copy.json";
export const metadata = { title: "How We Work" };
export default function Page() { return <SectionOverview section="how-we-work" description={copy.howWeWork} image="/preview/agriculture.jpg" />; }
