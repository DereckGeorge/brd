import PageIntro from "../components/page-intro";
export const metadata = { title: "Images & credits" };
export default function Credits() {
  return <><PageIntro title="Images & credits" eyebrow="Credits" description="Photo sources and acknowledgements for the BRD Tanzania website." /><div className="container credits-copy">
    <h2>BRD-supplied photographs and logos</h2><p>The Dar es Salaam photograph, workshop and meeting photographs, and four partner logos were provided in BRD_PHOTOS.zip and BRD_Partners.zip. The GNDR logo was provided separately. Images are optimised for web delivery without upscaling, and location metadata is removed. Logo proportions and colours are preserved. The RAPID source file is already cropped on its right edge; it is displayed without additional cropping.</p>
    <p>Workshop and meeting photographs provide context and do not establish an association with a specific project unless explicitly documented otherwise.</p>
    <h2>Our Team and Board of Directors</h2><p>Current portraits, names, roles and biographies follow BRD&apos;s Board of Directors archive. The five portraits are matched to the accompanying profiles using their filenames.</p>
    <h2>Editorial artwork</h2><p>The artwork accompanying Learning that builds preparedness was generated for this website. It depicts a conceptual learning session, not a documented BRD event.</p>
    <h2>Content and partner names</h2><p>Institutional copy, service descriptions, the four project summaries and board roster follow BRD&apos;s supplied website content. Partner logos are reproduced from the supplied files. Insight articles discuss general resilience topics; they are not reports of BRD activities.</p>
  </div></>;
}
