"use client";

import { usePathname } from "next/navigation";
import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { BottomFoot } from "../components/footer/bottomfoot";
import { Category } from "../components/category/category";

export default function WithUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isShippingPage = pathname.startsWith("/checkout/shipping");

  return (
    <div className="flex flex-col min-h-screen  w-full">
      <div className="w-full border-gray-200">
        <div className="mx-auto w-full">
          <Header />
        </div>
      </div>

      <div className="w-full bg-bg14 mt-4">
        <Category />
      </div>

      <main className="flex-1 w-full">
        <div className="max-w-screen-2xl mx-auto w-full ">{children}</div>
      </main>

      <footer className="w-full bg-bg5 border-t-3 border-border6 mt-4">
        <div className="max-w-screen-2xl mx-auto w-full">
          <Footer />
        </div>

        <div className="w-full bg-bg1">
          <div className="w-full max-w-screen-2xl mx-auto ">
            <BottomFoot />
          </div>
        </div>

        {/* Copyright Section — Matches Category Width */}
        <div className="w-full bg-bg5 py-6  text-sm text-text7">
          <div className="w-full max-w-7xl px-6 mx-auto  flex flex-col md:flex-row justify-between items-center">
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
  );
}
