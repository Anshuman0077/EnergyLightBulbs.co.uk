"use client";

import { Category } from "@/app/components/category/category";
import { BottomFoot } from "@/app/components/footer/bottomfoot";
import { Footer } from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import { usePathname } from "next/navigation";


export default function WithUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isShippingPage = pathname.startsWith("/checkout/shipping");

  return (
    <div className="flex flex-col min-h-screen w-full">
      {!isShippingPage && (
        <>
          <div className="w-full border-gray-200">
            <div className="max-w-screen-2xl mx-auto w-full">
              <Header />
            </div>
          </div>

          <div className="w-full bg-bg14 mt-4">
            <Category />
          </div>
        </>
      )}

      <main className="flex-1 w-full">
        <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {!isShippingPage && (
        <footer className="w-full bg-bg5 border-t-3 border-border6 mt-4">
          <div className="max-w-screen-2xl mx-auto w-full px-18">
            <Footer />
          </div>

          <div className="py-3 max-w-screen-2xl mx-auto">
            <BottomFoot />
          </div>

          <div className="w-full bg-bg5 px-6 sm:px-12 lg:px-18 py-6 text-center text-sm text-text7">
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
      )}
    </div>
  );
}
