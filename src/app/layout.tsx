import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "LNK - ShortLink | URL Shortener",
  description: "Perpendek URL Anda dalam sekejap. Gratis, cepat, dan mudah digunakan.",
  keywords: ["url shortener", "short link", "link shortener", "free url shortener", "lnk"],
  authors: [{ name: "SyaLink.com" }],
  openGraph: {
    title: "LNK - ShortLink | URL Shortener",
    description: "Perpendek URL Anda dalam sekejap. Gratis, cepat, dan mudah digunakan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
