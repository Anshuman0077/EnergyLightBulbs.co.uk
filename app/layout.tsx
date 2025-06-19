// app/layout.tsx or wherever your RootLayout is
import type { Metadata } from "next";
import { Inter, Roboto, Oswald } from "next/font/google";
import "./globals.css";

import Header from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { BottomFoot } from "./components/footer/bottomfoot";
import { Category } from "./components/category/category";

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
  title: "Energy Lights Bulbs - LED Bulbs",
  description:
    "Energy Light Bulbs – Find any type of decorative lighting bulbs for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${oswald.variable} antialiased bg-bg1 text-text1`}
      >
        <div className="flex flex-col min-h-screen w-full">
          {/* Header (centered) */}
          <div className="w-full border-gray-200">
            <div className="max-w-screen-2xl mx-auto w-full">
              <Header />
            </div>
          </div>

          {/* Category (full-width) */}
          <div className="w-full bg-bg14 mt-4">
            <Category />
          </div>

          {/* Main content (centered) */}
          <main className="flex-1 w-full">
            <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>

          {/* Footer (centered) */}
          <footer className="w-full bg-bg5 border-t-3 border-border6 mt-4">
            <div className="max-w-screen-2xl mx-auto w-full px-18">
              <Footer />
            </div>

            <div className="py-3 max-w-screen-2xl mx-auto">
              <BottomFoot />
            </div>

            <div className="w-full bg-bg5 px-6 sm:px-12 lg:px-18 py-6 text-center text-sm text-text7 border-t border-border5">
              <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p>Copyright © 2025 Energy Light Bulbs Ltd.</p>
                <img
                  src="https://doo9vxlv0gkqf.cloudfront.net/media/checkout_payment.png"
                  alt="Payment Options"
                  className="mt-4 md:mt-0 w-72"
                />
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
