import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const notoSansSC = Noto_Sans_SC({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lovable App",
  description: "Lovable Generated Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${notoSansSC.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
