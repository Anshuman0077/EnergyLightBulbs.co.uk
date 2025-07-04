import { BottomFoot } from "../components/footer/bottomfoot";

// app/checkout/layout.tsx
export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen bg-white">{children}</main>
      <div className="mt-16">
        <div className="max-w-screen-2xl mx-auto ">
          <BottomFoot />
        </div>
        <footer className="w-full bg-bg5 px-16  border-border6 mt-3  ">
          <div className="w-full bg-bg5 pb-10 py-6 text-center text-sm text-text7">
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
    </>
  );
}
