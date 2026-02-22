import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theaiobituary.vercel.app"),
  title: "The AI Obituary — The AI Boom (2022–2026)",
  description:
    "In Memoriam: The AI Boom, declared dead by 0.04% of the global population. Survived by 6.7 billion people who never used it.",
  openGraph: {
    title: "The AI Obituary — The AI Boom (2022–2026)",
    description:
      "In Memoriam: The AI Boom, declared dead by 0.04% of the global population. Survived by 6.7 billion people who never used it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Obituary — The AI Boom (2022–2026)",
    description:
      "In Memoriam: The AI Boom, declared dead by 0.04% of the global population. Survived by 6.7 billion people who never used it.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
