import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The AI Obituary — The AI Boom (2022–2026)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF9F6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            borderTop: "3px solid #1A1A1A",
            borderBottom: "1px solid #1A1A1A",
            paddingTop: "16px",
            paddingBottom: "12px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              letterSpacing: "-1px",
              color: "#1A1A1A",
            }}
          >
            THE AI OBITUARY
          </div>
        </div>
        <div
          style={{
            borderBottom: "3px solid #1A1A1A",
            paddingTop: "8px",
            paddingBottom: "12px",
            width: "100%",
            textAlign: "center",
            fontSize: "18px",
            color: "#6B6B6B",
            fontStyle: "italic",
          }}
        >
          February 2026
        </div>
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              color: "#1A1A1A",
            }}
          >
            The AI Boom
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#6B6B6B",
              marginTop: "8px",
              letterSpacing: "4px",
            }}
          >
            2022 — 2026
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#1A1A1A",
              marginTop: "24px",
              maxWidth: "800px",
              lineHeight: "1.5",
            }}
          >
            Declared dead by 0.04% of the global population. Survived by 6.7
            billion people who never used it.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
