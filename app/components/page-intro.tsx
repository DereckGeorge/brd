import Link from "next/link";

export default function PageIntro({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) {
  return <section className="page-intro container"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{eyebrow}</span></div><div className="intro-grid"><h1>{title}</h1><p>{description}</p></div></section>;
}
