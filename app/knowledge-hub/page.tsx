import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import CollectionBrowser from "../components/collection-browser";
import { resources } from "../data/content";
import { knowledgeCategories } from "../data/site-config";

export const metadata = { title: "Knowledge Hub" };
export default function KnowledgeHub() {
  return <><PageIntro title="Knowledge Hub." eyebrow="Knowledge Hub" description="Evidence, practical resources, and shared learning. Discover knowledge that connects research with informed local action." /><section className="container knowledge-directory" aria-label="Knowledge categories">{knowledgeCategories.map((category) => <Link key={category.slug} href={`/knowledge-hub/categories/${category.slug}`}><div><h2>{category.title}</h2><p>{category.description}</p></div><ArrowUpRight size={20} /></Link>)}</section><div className="container directory-heading"><h2>Browse all resources.</h2><p>Illustrative publications and learning resources.</p></div><CollectionBrowser items={resources} section="knowledge-hub" /></>;
}
