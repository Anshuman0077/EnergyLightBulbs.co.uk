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
    <div className="min-h-screen flex px-4">
      <div className=" w-full bg-white p-6 ">{children}</div>
    </div>
  );
}
