import PageIntro from "../components/page-intro";
export const metadata = { title: "Images & credits" };
export default function Credits() {
  return <><PageIntro title="Images & credits." eyebrow="Credits" description="Photo sources and acknowledgements for the BRD Tanzania website." /><div className="container credits-copy">
    <h2>BRD-supplied photographs and logos</h2><p>The Dar es Salaam photograph, workshop and meeting photographs, and the four partner logos were supplied for this website in BRD_PHOTOS.zip and BRD_Partners.zip. Images are optimised for web delivery without upscaling, and location metadata is removed. Logo proportions and colours are preserved. The RAPID source file is already cropped on its right edge; it is displayed without additional cropping.</p>
    <p>Photographs do not identify individual staff members or establish an association with a specific project. Project-page images provide context unless explicitly documented otherwise.</p>
    <h2>Licensed stock photographs</h2><p>Landscape and workshop photographs are used under the <a href="https://unsplash.com/license">Unsplash licence</a>, which permits commercial and non-commercial website use. The workshop photograph is by Christina @ wocintechchat.com. The mangrove photograph is by Waranont (Joe), originally from Unsplash, via <a href="https://asknature.org/strategy/mangrove-forests-calm-coastal-waters/attachment/mangrove-waranont-joe-xiwyx_u9ynu-unsplash/">AskNature</a>. Original asset URLs are recorded in the asset script.</p>
    <h2>Content and partner names</h2><p>Institutional copy, service descriptions, the four project summaries and board roster follow BRD&apos;s supplied website content. Partner logos are reproduced from the supplied files. Team names, roles and biographies will be added when confirmed.</p>
    <p>Remaining knowledge resources, news stories and videos are explicitly labelled design samples and are not official publications or activity records.</p>
  </div></>;
}
