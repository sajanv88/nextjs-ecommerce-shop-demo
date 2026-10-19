import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The image shared links show. It's drawn once, at build time, from two campaign photographs
// and the display face. Satori draws it, which reads neither CSS variables nor the stylesheet,
// so its colors are the theme's light values written out.
const ink = "#1d1a17";
const ivory = "#faf8f4";
const muted = "#6b645c";
const champagne = "#b89a5e";

export default async function OpengraphImage() {
  const dir = join(process.cwd(), "src/app/_og");
  const [font, women, men] = await Promise.all([
    readFile(join(dir, "cormorant-garamond-500.ttf")),
    readFile(join(dir, "women.jpg")),
    readFile(join(dir, "men.jpg")),
  ]);
  const photo = (data: Buffer) => `data:image/jpeg;base64,${data.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: ivory }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 520,
          padding: "64px 56px",
          color: ink,
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, textTransform: "uppercase" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 2, background: champagne, marginBottom: 28 }} />
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -1 }}>Quiet luxury,</div>
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -1, fontStyle: "italic" }}>
            made to move.
          </div>
        </div>
        <div style={{ fontSize: 26, color: muted }}>
          Considered essentials, made in limited runs
        </div>
      </div>
      {/* biome-ignore lint/performance/noImgElement: Satori draws plain <img>, not next/image */}
      <img src={photo(women)} width={340} height={630} alt="" style={{ objectFit: "cover" }} />
      {/* biome-ignore lint/performance/noImgElement: as above */}
      <img src={photo(men)} width={340} height={630} alt="" style={{ objectFit: "cover" }} />
    </div>,
    { ...size, fonts: [{ name: "Cormorant Garamond", data: font, weight: 500, style: "normal" }] },
  );
}
