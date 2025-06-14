import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Roboto, Oswald } from "next/font/google";
import "./globals.css";
// import Header from "./components/header";

import Header from "./components/header";
import { Footer } from "./components/footer";
import { BottomFoot } from "./components/bottomfoot";

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

export const metadata: Metadata = {
  title: "Energy Lights Bulbs- LED Bulbs & ",
  description:
    "energy light bulbs here you got anytype of bulbs decorate you house with this bulbs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${oswald.variable} antialiased`}
      >
          <div className="flex flex-col min-h-screen max-w-[1800px]  text-text1">
            <div className="px-16">
              <Header />

            </div>
      {/* Header */}
      

      {/* Main Content */}
      <main className="flex-1 ">{children}</main>

      {/* Footer Top Section (you can use Footer.jsx or write inline here) */}
      <div className="w-full  bg-bg5 mt-3 border-t-3 border-border6 ">
        <Footer />
      </div>

      {/* Bottom Footer Full Width */}
      <div className="py-3">
        <BottomFoot />

      </div>
      

      {/* Copyright */}
      <div className="w-full px-6 bg-bg5 sm:px-12 lg:px-18 py-6 text-center text-sm text-text7  border-border5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2025 Energy Light Bulbs Ltd.</p>
          <img
            src="https://doo9vxlv0gkqf.cloudfront.net/media/checkout_payment.png"
            alt="Payment Options"
            className="mt-4 md:mt-0 w-72"
          />
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
