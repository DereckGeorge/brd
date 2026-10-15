import { mkdir, writeFile } from "node:fs/promises";

const assets = [
  ["flood-response", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Coast_Guard_rescue_boat_in_2016_Baton_Rouge_Louisiana_flood.jpg/1280px-Coast_Guard_rescue_boat_in_2016_Baton_Rouge_Louisiana_flood.jpg"],
  ["agriculture", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85"],
  ["forest", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85"],
  ["coast", "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85"],
  ["city", "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=85"],
  ["workshop", "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?auto=format&fit=crop&w=1600&q=85"],
  ["mangroves", "https://ask-nature.sfo3.digitaloceanspaces.com/wp-content/uploads/2016/03/31141543/mangrove-waranont-joe-xIwYx_U9yNU-unsplash.jpg"],
  ["person-1", "https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?auto=format&fit=crop&w=700&q=85"],
  ["person-2", "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85"],
  ["person-3", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"],
  ["person-4", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85"],
  ["person-5", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"],
  ["person-6", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85"],
];

await mkdir("public/preview", { recursive: true });
const results = await Promise.allSettled(assets.map(async ([name, url]) => {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  await writeFile(`public/preview/${name}.jpg`, Buffer.from(await response.arrayBuffer()));
  console.log(`Saved ${name}`);
}));
for (const result of results) {
  if (result.status === "rejected") {
    console.error(result.reason.message);
    process.exitCode = 1;
  }
}
