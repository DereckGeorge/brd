import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Download, Plus } from "lucide-react";
import SiteHeader from "./components/site-header";

const focusAreas = [
  { title: "Disaster risk", text: "Preparedness, prevention, risk reduction, response, and recovery." },
  { title: "Climate resilience", text: "Adaptation and mitigation for a changing environment." },
  { title: "Geospatial science", text: "GIS, remote sensing, and Earth observation for informed decisions." },
  { title: "Community wellbeing", text: "Education, health, environment, and water, sanitation and hygiene." },
];

const stats = [
  ["Registered NGO", "ooNGO/R/3470"],
  ["Established", "7 March 2022"],
  ["Registered", "14 July 2022"],
  ["TIN", "154-274-030"],
];

const services = [
  {
    title: "Research Center",
    text: "Evidence generation across hazards, preparedness, response, recovery, vulnerability, disaster governance, gender and DRR, early warning systems, and climate resilience.",
    items: [
      "Hazard, disaster risk, and vulnerability assessments",
      "Survey design, protocols, and data collection systems",
      "Research technical assistance, coaching, and mentorship",
      "Data management and analysis using SPSS, STATA, R, Excel, ODK, and Kobo Toolbox",
    ],
  },
  {
    title: "Consultancy and Advocacy",
    text: "Technical and advisory support for public institutions, development partners, NGOs, private organizations, communities, and practitioners.",
    items: [
      "DRM, DRR, climate adaptation, and mitigation strategies",
      "Emergency operations, preparedness, response, recovery, and risk communication plans",
      "GIS, remote sensing, geospatial mapping, QGIS, ArcGIS Pro, and handheld GPS workflows",
      "Policy, institutional framework, humanitarian, PDNA, and refugee operations support",
    ],
  },
  {
    title: "Training Center",
    text: "Practical learning programs that strengthen the capacities of professionals, institutions, communities, and vulnerable groups.",
    items: [
      "Disaster preparedness, response, recovery, prevention, and mitigation",
      "GIS, Earth observation, geospatial mapping, and environmental risk management",
      "Health, WASH, gender equality, empowerment, and community engagement",
      "Adaptable programs for organizations, researchers, students, and community teams",
    ],
  },
];

const values = [
  "Professionalism",
  "Integrity",
  "Accountability",
  "Respect",
  "Inclusiveness",
  "Service to communities",
];

const team = [
  {
    name: "Dr. Joseph S. Mayunga",
    role: "Executive Director and Co-Founder",
    details:
      "Disaster risk management, geospatial, and Earth observation specialist with more than 20 years of research, training, and consultancy experience.",
  },
  {
    name: "Ms. Vivaoliva U. Shoo",
    role: "Managing Director and Co-Founder",
    details:
      "Disaster risk management specialist with more than 15 years of humanitarian, development, programming, advocacy, and operations experience.",
  },
  {
    name: "Dr. Guido A. Uhinga",
    role: "Director of Operations and Co-Founder",
    details:
      "Climate change, GIS, remote sensing, and Earth observation specialist with more than 20 years of teaching, research, and consultancy experience.",
  },
  {
    name: "Hamza A. Farahan",
    role: "Director of Finance and Administration and Co-Founder",
    details:
      "Finance and accounting leader with more than 20 years of budgeting, reporting, financial management, and resource mobilization experience.",
  },
  {
    name: "Mr. Johnston Weston",
    role: "Project Coordinator and Co-Founder",
    details:
      "Project management and disaster risk management professional with experience in preparedness, anticipatory action, early warning, response, and community resilience.",
  },
];

const address = [
  "BRD Tanzania",
  "P.O. Box 6548",
  "Kibo Complex, Tegeta, 1st Floor, Office No. 06",
  "Bagamoyo Road",
  "Dar es Salaam, Tanzania",
];

export default function Home() {
  const portraits = ["joseph-mayunga", "vivaoliva-shoo", "guido-uhinga", "hamza-farahan", "johnston-weston"];

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <Image className="hero-image" src="/tanzania-landscape.jpg" alt="The ridges and valleys of the Usambara Mountains in Tanzania" fill sizes="100vw" preload />
          <div className="hero-content container">
            <p className="hero-label">Building Resilience to Disasters</p>
            <h1 id="hero-title">BRD Tanzania.</h1>
            <p className="hero-description">Science and action.<br />For safer communities.</p>
            <a className="button" href="#work">Discover our work <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-caption container">
            <span>Rooted in Tanzania. Working for resilience.</span>
            <span>Usambara Mountains, Tanzania</span>
          </div>
        </section>

        <div className="intro-bar container">
          <p>An independent NGO connecting research, practical skills, and humanitarian action.</p>
          <a className="text-link" href="#about">Meet BRD <ArrowDownRight size={19} aria-hidden="true" /></a>
        </div>

        <section id="about" className="section container">
          <div className="section-topline"><span className="section-label">01 / Our purpose</span><span className="quiet-label">Established in 2022</span></div>
          <div className="purpose-grid">
            <h2>Resilience begins<br />with knowledge.</h2>
            <div className="purpose-copy">
              <p className="lead">We work to reduce disaster risks and help communities build a safer, more resilient future.</p>
              <p>BRD Tanzania is an independent, not-for-profit organization working across Tanzania Mainland. We connect scientific research, geospatial technology, and practical disaster risk knowledge with the people and institutions that need them.</p>
              <p>Our work brings together vulnerable communities, public and private institutions, development partners, and professionals to support sustainable, climate-resilient development.</p>
            </div>
          </div>
          <div className="mission-grid">
            <article><h3>Our mission</h3><p>To contribute evidence-based, innovative, and practical solutions that address disaster impacts and strengthen disaster-resilient communities.</p></article>
            <article><h3>Our vision</h3><p>A society where scientific information, technology, and practical risk knowledge help practitioners, policy makers, and communities reduce disaster risks and build resilience.</p></article>
          </div>
          <dl className="organization-facts">
            {stats.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>

        <section id="work" className="section work-section">
          <div className="container">
            <div className="section-topline"><span className="section-label">02 / Our work</span><span className="quiet-label">Evidence into action</span></div>
            <div className="section-intro"><h2>Knowledge.<br />Put to work.</h2><p>Three specialist centers. One shared purpose: to strengthen the capacity of communities and institutions to prepare, respond, and recover.</p></div>
            <div id="services" className="services-list">
              {services.map((service, index) => (
                <details className="service" key={service.title} open={index === 0}>
                  <summary>
                    <span className="row-number">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <span className="service-subtitle">{["Understand risk. Inform the response.", "Turn evidence into practical decisions.", "Build skills. Strengthen preparedness."][index]}</span>
                    <Plus className="expand-icon" size={23} strokeWidth={1.4} aria-hidden="true" />
                  </summary>
                  <div className="service-content"><p>{service.text}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </details>
              ))}
            </div>
            <div className="focus-heading"><h3>Where we focus</h3><span className="quiet-label">Connected challenges. Shared solutions.</span></div>
            <div className="focus-grid">{focusAreas.map((area) => <article key={area.title}><h4>{area.title}</h4><p>{area.text}</p></article>)}</div>
          </div>
        </section>

        <section id="community" className="section container community-section">
          <div className="section-topline"><span className="section-label">03 / People &amp; communities</span><ArrowDownRight size={25} strokeWidth={1.25} aria-hidden="true" /></div>
          <h2>Prepared communities.<br /><span className="muted-heading">Stronger futures.</span></h2>
          <div className="community-grid">
            <p className="lead">Supporting people before, during, and after emergencies.</p>
            <div><p>Through national and international partnerships, BRD provides emergency relief, health services, water, sanitation and hygiene assistance, and support for disaster-affected populations.</p><p>Our volunteers support response and community engagement with respect for humanitarian standards, accountability, and the people we serve.</p></div>
          </div>
          <div className="community-notes">
            <article><h3>Outreach &amp; awareness</h3><p>Workshops, seminars, public awareness campaigns, and community engagement help turn risk knowledge into everyday preparedness.</p></article>
            <article><h3>How we work</h3><p>{values.join(". ")}. These values guide every part of our work.</p></article>
          </div>
        </section>

        <section id="team" className="section team-section">
          <div className="container">
            <div className="section-topline"><span className="section-label">04 / Our people</span><span className="quiet-label">Experience with purpose</span></div>
            <div className="section-intro"><h2>A shared commitment.<br />A breadth of expertise.</h2><p>Our multidisciplinary leadership brings national and international experience in disaster risk, climate science, humanitarian action, and community resilience.</p></div>
            <div className="team-list">
              {team.map((member, index) => (
                <details className="team-member" key={member.name}>
                  <summary><Image src={`/team/${portraits[index]}.jpg`} alt={member.name} width={76} height={76} sizes="76px" className="portrait" /><h3>{member.name}</h3><span className="member-role">{member.role}</span><Plus className="expand-icon" size={22} strokeWidth={1.4} aria-hidden="true" /></summary>
                  <p className="member-bio">{member.details}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="section container resources-section">
          <div className="section-topline"><span className="section-label">05 / Resources</span><span className="quiet-label">Get to know our organization</span></div>
          <div className="resource-grid"><h2>A closer look.</h2><div className="resource-links">
            <a href="/brd-tanzania-profile.pdf" download><div><h3>Organization profile</h3><span>BRD Tanzania / PDF</span></div><Download size={22} strokeWidth={1.5} aria-hidden="true" /></a>
            <a href="/brd-research-consulting-center.pdf" download><div><h3>Research &amp; consulting</h3><span>Center brochure / PDF</span></div><Download size={22} strokeWidth={1.5} aria-hidden="true" /></a>
          </div></div>
        </section>

        <section id="donate" className="partnership-section">
          <div className="container partnership-inner">
            <span className="section-label">A shared future</span>
            <h2>Build resilience<br />with us.</h2>
            <div className="partnership-bottom"><p>Partner, volunteer, or support our work with financial and in-kind contributions. Together, we can strengthen preparedness and protect vulnerable communities.</p><a className="partnership-link" href="mailto:info@brd.or.tz?subject=Partner%20with%20BRD%20Tanzania">Start a conversation <ArrowUpRight size={24} strokeWidth={1.5} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <div className="section-topline"><span className="section-label">06 / Get in touch</span><span className="quiet-label">Dar es Salaam, Tanzania</span></div>
          <div className="contact-heading"><h2>Let&apos;s talk.</h2><a href="mailto:info@brd.or.tz">info@brd.or.tz <ArrowUpRight size={30} strokeWidth={1.3} aria-hidden="true" /></a></div>
          <div className="contact-grid">
            <div><h3>Visit us</h3><address>{address.map((line) => <span key={line}>{line}<br /></span>)}</address><a className="text-link map-link" href="https://www.google.com/maps/search/?api=1&query=Kibo+Complex+Tegeta+Bagamoyo+Road+Dar+es+Salaam+Tanzania" target="_blank" rel="noopener noreferrer">Find us on the map <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <div><h3>Call us</h3><a href="tel:+255768021824">+255 768 021 824</a><a href="tel:+255789932878">+255 789 932 878</a></div>
            <div><h3>Organization enquiries</h3><p>Dr. Joseph S. Mayunga<br />Executive Director and Co-Founder</p><a className="text-link" href="mailto:info@brd.or.tz">Send an email <ArrowRight size={16} aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top"><a href="#home" className="footer-brand">BRD Tanzania.</a><span>Building Resilience to Disasters</span><a className="text-link" href="#home">Back to top <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} BRD Tanzania</p><p>Independent. Not-for-profit. Community-focused.</p></div>
        <p className="photo-credit">Landscape: <a href="https://commons.wikimedia.org/wiki/File:Usambara_Mountains,_Tanzania.jpg" target="_blank" rel="noopener noreferrer">Joachim Huber</a> / <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>.</p>
      </footer>
    </>
  );
}
