import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06060b",
          borderRadius: 6,
          border: "1px solid #00e5ff",
          color: "#00e5ff",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        MA
      </div>
    ),
    { ...size }
  );
}
