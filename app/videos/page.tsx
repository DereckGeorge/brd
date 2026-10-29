import PageIntro from "../components/page-intro";
import VideoLibrary from "../components/video-library";

export const metadata = { title: "Videos & Learning" };
export default function Videos() { return <><PageIntro title="Videos & Learning" eyebrow="Knowledge Hub" description="Community engagement, practical learning and resilience" stacked /><VideoLibrary /></>; }
