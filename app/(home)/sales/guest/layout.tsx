import { Category } from "@/app/components/category/category";
import { Footer } from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import React from "react";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full max-w-7xl px-6 mx-auto flex ">
      <div className=" w-full  bg-bg1">{children}</div>
    </div>
  );
}
