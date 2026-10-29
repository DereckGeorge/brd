import team from "../data/team.json";

export default function Organogram() {
  return <section className="team-organogram container" aria-label="BRD team organisational structure"><div className="org-banner"><h2>BRD Tanzania</h2></div><div className="org-leadership">{team.slice(0, 2).map((member) => <div className="org-role org-leader" key={member.slug}><h3>{member.role.replace(" and Co-Founder", "")}</h3><p>{member.name}</p></div>)}</div><div className="org-team-branches">{team.slice(2).map((member) => <div className="org-role" key={member.slug}><h3>{member.role.replace(" and Co-Founder", "")}</h3><p>{member.name}</p></div>)}</div></section>;
}
