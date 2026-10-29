import Link from "next/link";
export default function NotFound() { return <section className="container empty-state"><span className="eyebrow">404</span><h1>Page not found</h1><p>The page may have moved or is no longer available.</p><Link className="button" href="/">Back to BRD</Link></section>; }
