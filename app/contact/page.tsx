import PageIntro from "../components/page-intro";
import EnquiryForm from "../components/enquiry-form";
import { contact, socialProfiles } from "../data/site-config";

export const metadata = { title: "Contact Us" };
export default function Contact() {
  return <><PageIntro title="Let's talk." eyebrow="Contact Us" description="A question, an idea, a possible collaboration. Every good partnership starts with a conversation." /><section className="contact-layout container"><div><span className="eyebrow">Find us in Dar es Salaam</span><h2>{contact.name}</h2><address>{contact.address.map((line) => <span key={line}>{line}<br /></span>)}</address><a href={`mailto:${contact.email}`}>{contact.email}</a>{contact.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>)}<p className="sample-note">The form is a design preview. For a real enquiry, use the contact details above.</p><div className="contact-social"><h2>Connect with BRD</h2>{socialProfiles.map((profile) => <div key={profile.name}><span>{profile.name}</span>{profile.url ? <a href={profile.url} target="_blank" rel="noopener noreferrer">Visit profile</a> : <span className="sample-note">Official link pending</span>}</div>)}</div></div><EnquiryForm /></section></>;
}
