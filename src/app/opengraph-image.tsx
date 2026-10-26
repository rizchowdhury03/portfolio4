/**
 * The preview image shown when your link is shared (LinkedIn, LINE, Slack...).
 * It is generated automatically from portfolio.ts. No need to edit.
 */
import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name}: ${profile.positioning.join(" × ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f5f3ee",
          color: "#17181b",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#646872", letterSpacing: 2 }}>
          {`${profile.university.toUpperCase()} · ${profile.location.toUpperCase()}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#464a52" }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 40 }}>
          {profile.positioning.map((word, i) => (
            <div key={word} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <span style={{ color: "#a8361c", margin: "0 22px" }}>×</span>}
              <span>{word}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
