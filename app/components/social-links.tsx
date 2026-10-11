import { FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { socialProfiles } from "../data/site-config";

const icons = { X: FaXTwitter, Instagram: FaInstagram, YouTube: FaYoutube, LinkedIn: FaLinkedinIn };
export default function SocialLinks() {
  return <div className="social-links" aria-label="BRD social media">{socialProfiles.map((profile) => {
    const Icon = icons[profile.name];
    return profile.url ? <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" title={`BRD Tanzania on ${profile.name}`} aria-label={`BRD Tanzania on ${profile.name}`}><Icon size={17} aria-hidden="true" /></a> : <span key={profile.name} className="social-pending" title={`${profile.name}: official profile link pending`}><Icon size={17} aria-hidden="true" /><span className="sr-only">{profile.name}: official profile link pending</span></span>;
  })}</div>;
}
