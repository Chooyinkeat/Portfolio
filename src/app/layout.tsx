import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "animate.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Choo Yin Keat | Software Engineer",
  description:
    "Portfolio of Choo Yin Keat — Software Engineer specializing in full-stack web and mobile development, DevOps, and system automation.",
  keywords: [
    "Choo Yin Keat",
    "Software Engineer",
    "Full Stack Developer",
    "ASP.NET",
    "Next.js",
    "Flutter",
    "Malaysia",
  ],
  authors: [{ name: "Choo Yin Keat" }],
  openGraph: {
    title: "Choo Yin Keat | Software Engineer",
    description:
      "Passionate Software Engineer with experience in full-stack development, DevOps, and system automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
