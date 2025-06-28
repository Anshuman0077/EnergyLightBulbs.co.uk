// app/checkout/layout.tsx
export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen bg-white">{children}</main>
    </>
  );
}
