import InstitutionPage from "../components/institution-page";
import { institutionPages } from "../data/institution";

export const metadata = { title: "Who We Are" };
export default function WhoWeAre() { return <InstitutionPage page={institutionPages["who-we-are"].find((page) => page.slug === "about")!} section="who-we-are" />; }
