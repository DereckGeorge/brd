import PageIntro from "../components/page-intro";
export const metadata = { title: "Images & credits" };
export default function Credits() {
  return <><PageIntro title="Images & credits." eyebrow="Credits" description="Illustrative imagery is not documentation of BRD projects, partners or personnel." /><div className="container credits-copy">
    <h2>Homepage flood-response illustration</h2><p>The flood-response illustration was generated specifically for this website using OpenAI image generation. It is an illustrative scene, not a photograph or record of an actual BRD operation. No third-party rescue organisation logo or insignia is used.</p>
    <h2>Licensed stock photographs</h2><p>Landscape and workshop photographs are used under the <a href="https://unsplash.com/license">Unsplash licence</a>, which permits commercial and non-commercial website use. The workshop photograph is by Christina @ wocintechchat.com. The mangrove photograph is by Waranont (Joe), originally from Unsplash, via <a href="https://asknature.org/strategy/mangrove-forests-calm-coastal-waters/attachment/mangrove-waranont-joe-xiwyx_u9ynu-unsplash/">AskNature</a>. Original asset URLs are recorded in the asset script.</p>
    <h2>Content and partner names</h2><p>Institutional copy, service descriptions, the four project summaries and partner names follow BRD&apos;s supplied website content. Partner names are presented as text; official third-party logos have not been reproduced. Staff and board biographies will be added when supplied.</p>
    <p>Remaining knowledge resources, news stories and videos are explicitly labelled design samples and are not official publications or activity records.</p>
  </div></>;
}
