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
    <div className="min-h-screen flex">
      <div className="min-h-screen   max-w-7xl w-full px-6 mx-auto bg-bg1 pt-1 ">

        {children}
      
      </div>
    </div>
  );
}
