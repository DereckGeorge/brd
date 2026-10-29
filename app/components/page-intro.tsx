import Link from "next/link";

export default function PageIntro({ title, eyebrow, description, stacked = false }: { title: string; eyebrow: string; description: string; stacked?: boolean }) {
  return <section className={`page-intro container ${stacked ? "page-intro-stacked" : ""}`}><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{eyebrow}</span></div><div className="intro-grid"><h1>{title.replace(/\.+$/, "")}</h1>{description && <p>{description}</p>}</div></section>;
}
