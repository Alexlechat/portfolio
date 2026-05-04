import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexandre Lefranc — Développeur · Cybersécurité · 42 Lyon",
  description:
    "Étudiant à l'École 42 Lyon. Développeur avec un fort intérêt pour la cybersécurité, les réseaux et la sécurité des systèmes.",
  keywords: ["cybersécurité", "42 Lyon", "C", "réseaux", "sécurité systèmes", "développeur"],
  openGraph: {
    title: "Alexandre Lefranc",
    description: "Développeur · Cybersécurité · 42 Lyon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistMono.variable} ${satoshi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
