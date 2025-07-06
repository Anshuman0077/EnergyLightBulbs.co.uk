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
        </footer>
      )}
    </div>
  );
}
