import type { Metadata } from "next";
import { Cinzel_Decorative, Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import FallingLeaves from "@/components/FallingLeaves";
import { Providers } from "@/components/Providers";

const cinzelDeco = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-deco",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Portfolio | Medieval Chronicle",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cinzelDeco.variable} ${cinzel.variable} ${garamond.variable}`} suppressHydrationWarning>
      <body className="antialiased font-garamond overflow-x-hidden relative min-h-screen bg-parchment dark:bg-obsidian transition-colors duration-500">
        <Providers>
          <FallingLeaves />
          {children}
        </Providers>
      </body>
    </html>
  );
}
