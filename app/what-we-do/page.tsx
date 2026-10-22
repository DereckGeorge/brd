import SectionOverview from "../components/section-overview";
import copy from "../data/approved-copy.json";
export const metadata = { title: "What We Do" };
export default function Page() { return <SectionOverview section="what-we-do" description={copy.whatWeDo} image="/preview/agriculture.jpg" />; }
