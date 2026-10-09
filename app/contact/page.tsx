import PageIntro from "../components/page-intro";
import EnquiryForm from "../components/enquiry-form";

export const metadata = { title: "Contact" };
export default function Contact() {
  return <><PageIntro title="Let's talk." eyebrow="Contact" description="A question, an idea, a possible collaboration. Every good partnership starts with a conversation." /><section className="contact-layout container"><div><span className="eyebrow">Find us in Dar es Salaam</span><h2>BRD Tanzania</h2><address>P.O. Box 6548<br />Kibo Complex, Tegeta<br />1st Floor, Office No. 06<br />Bagamoyo Road<br />Dar es Salaam, Tanzania</address><a href="mailto:info@brd.or.tz">info@brd.or.tz</a><a href="tel:+255768021824">+255 768 021 824</a><a href="tel:+255789932878">+255 789 932 878</a><p className="sample-note">The form is a design preview. For a real enquiry, use the contact details above.</p></div><EnquiryForm /></section></>;
}
