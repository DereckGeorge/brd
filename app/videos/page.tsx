import PageIntro from "../components/page-intro";
import VideoLibrary from "../components/video-library";

export const metadata = pageMetadata("Videos & Learning", "/videos");
export default function Videos() { return <><PageIntro title="Videos & Learning" eyebrow="Knowledge Hub" description="Community engagement, practical learning and resilience" stacked /><VideoLibrary /></>; }
import { pageMetadata } from "../data/seo";
