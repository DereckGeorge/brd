import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";

// Local stock-photo storyboards, not footage of BRD activities.
const scenes = [
  ["coastal-learning", "coast", "mangroves"],
  ["preparedness-learning", "workshop", "agriculture"],
  ["landscape-learning", "agriculture", "forest"],
];
mkdirSync("public/preview/videos", { recursive: true });
const normalize = "scale=960:540:force_original_aspect_ratio=increase,crop=960:540,setsar=1,fps=24,format=yuv420p";
for (const [name, first, second] of scenes) {
  const result = spawnSync("ffmpeg", [
    "-hide_banner", "-loglevel", "error", "-y",
    "-loop", "1", "-t", "6", "-i", `public/preview/${first}.jpg`,
    "-loop", "1", "-t", "6", "-i", `public/preview/${second}.jpg`,
    "-filter_complex", `[0:v]${normalize}[a];[1:v]${normalize}[b];[a][b]concat=n=2:v=1:a=0[out]`,
    "-map", "[out]", "-an", "-t", "12", "-c:v", "libx264", "-preset", "veryfast", "-crf", "27", "-movflags", "+faststart", `public/preview/videos/${name}.mp4`,
  ], { stdio: "inherit" });
  if (result.status !== 0) { process.exitCode = 1; break; }
  process.stdout.write(`Created ${name}\n`);
}
