import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Ahmed Abdelhadi | Angular Developer",
  description:
    "Professional portfolio of Muhammad Ahmed Abdelhadi — Angular developer specializing in healthcare and enterprise front-end systems.",
  keywords: [
    "Angular Developer",
    "TypeScript",
    "Front-End Engineer",
    "Healthcare Software",
    "Muhammad Abdelhadi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
