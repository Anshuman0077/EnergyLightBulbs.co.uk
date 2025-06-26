import { BottomFoot } from "../components/footer/bottomfoot";
import { Footer } from "../components/footer/footer";
import Header from "../components/header/header";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div className="flex flex-col  bg-bg1  max-w-[1800px]  text-text1">
      <main className="mt-3">{children}</main>
     </div>
  );
}
