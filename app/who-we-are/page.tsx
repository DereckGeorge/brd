import InstitutionPage from "../components/institution-page";
import { institutionPages } from "../data/institution";

export const metadata = pageMetadata("Who We Are", "/who-we-are");
export default function WhoWeAre() { return <InstitutionPage page={institutionPages["who-we-are"].find((page) => page.slug === "about")!} section="who-we-are" />; }
import { pageMetadata } from "../data/seo";
