import PageIntro from "../components/page-intro";
import SiteSearch from "../components/site-search";
export const metadata = { title: "Search" };
export default function Search() { return <><PageIntro title="Search" eyebrow="Search" description="Find BRD projects, services, team members and information" stacked /><SiteSearch /></>; }
