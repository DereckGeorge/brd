import Link from "next/link";
export default function NotFound() { return <section className="container empty-state"><span className="eyebrow">404</span><h1>Page not found.</h1><p>This page is not part of the design preview.</p><Link className="button" href="/">Back to BRD</Link></section>; }
