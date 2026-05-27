import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { seoConfig } from "@/lib/seo";

export const alt = `${seoConfig.name} - ${seoConfig.jobTitle}`;
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  const profileImageData = readFileSync(
    join(process.cwd(), "public", seoConfig.profileImage),
  ).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0f172a",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            width: "690px",
          }}
        >
          <div
            style={{
              color: "#38bdf8",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            {seoConfig.jobTitle}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                fontSize: "78px",
                fontWeight: 800,
                lineHeight: 0.96,
              }}
            >
              {seoConfig.name}
            </div>
            <div
              style={{
                color: "#cbd5e1",
                fontSize: "32px",
                lineHeight: 1.35,
              }}
            >
              React, Next.js, TypeScript, and scalable web interfaces.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "330px",
            height: "330px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "8px solid #38bdf8",
            display: "flex",
          }}
        >
          <img
            src={`data:image/jpeg;base64,${profileImageData}`}
            alt=""
            width="330"
            height="330"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
