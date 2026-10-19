import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// The home-screen icon: the monogram in ivory on ink. Colors are written out because Satori
// doesn't read the stylesheet.
export default async function AppleIcon() {
  const font = await readFile(join(process.cwd(), "src/app/_og/cormorant-garamond-500.ttf"));

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#1d1a17",
        color: "#faf8f4",
        fontSize: 120,
        lineHeight: 1,
        paddingBottom: 12,
      }}
    >
      N
    </div>,
    { ...size, fonts: [{ name: "Cormorant Garamond", data: font, weight: 500, style: "normal" }] },
  );
}
