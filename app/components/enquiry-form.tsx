"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  return sent ? <div className="form-receipt" role="status"><Check size={32} /><h2>Thank you for trying the form.</h2><p>Preview only. No enquiry was sent or stored.</p><button className="text-link" onClick={() => setSent(false)}>Start again<ArrowUpRight size={18} /></button></div> : <form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
    <div className="form-row"><label>Full name<input name="name" autoComplete="name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label></div>
    <div className="form-row"><label>Organization<input name="organization" autoComplete="organization" /></label><label>Interested in<select name="interest" aria-label="Interested in" defaultValue=""><option value="" disabled>Select a topic</option><option>Partnership</option><option>Research</option><option>Consultancy & training</option><option>Volunteering</option><option>General enquiry</option></select></label></div>
    <label>Your message<textarea name="message" rows={5} required /></label><label className="checkbox-label"><input type="checkbox" required />I understand this is a design preview and no message will be sent.</label><button className="button" type="submit">Preview enquiry<ArrowUpRight size={18} /></button>
  </form>;
}
