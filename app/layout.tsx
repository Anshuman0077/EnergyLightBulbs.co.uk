
import type { Metadata } from "next";
import { Inter, Roboto, Oswald } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energy Lights Bulbs - LED Bulbs",
  description: "Energy Light Bulbs – Find any type of decorative lighting bulbs for your home.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${oswald.variable} antialiased bg-bg1 text-text1`}
      >
        {children}
      </body>
    </html>
  );
}
