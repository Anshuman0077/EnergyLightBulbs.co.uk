"use client";

import { Breadcrumbs } from "@/app/components/breadcrum/breadcrumbs";
import { Input } from "@/app/components/Input/Input";
import { Select } from "@/app/components/Input/Select";
import React, { useState } from "react";

export default function OrderReturnForm() {
  const [formData, setFormData] = useState({
    orderId: "",
    billinglastname: "",
    findorderby: "email",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="px-4  w-full flex text-text18 bg-white">
      <div className="w-full  mx-auto space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Headings */}
        <legend className="text-4xl font-bold text-text17 tracking-tight leading-relaxed">
          ORDERS AND RETURNS
        </legend>

        <div>
          <legend className="text-xl font-semibold text-black tracking-tight leading-relaxed">
            ORDER INFORMATION
          </legend>
          <div className="border-t w-1/3 border-border3 mt-2" />

          {/* Form */}
          <form className="w-full max-w-md space-y-6 mt-6">
            <Input
              label="Order ID"
              name="orderId"
              required
              value={formData.orderId}
              onchange={handleChange}
            />
            <Input
              label="Billing Last Name"
              name="billinglastname"
              required
              value={formData.billinglastname}
              onchange={handleChange}
            />

            <Select
              label="Find Order By"
              name="findorderby"
              value={formData.findorderby}
              onchange={handleChange}
              options={[
                { value: "email", label: "Email" },
                { value: "zip", label: "ZIP Code" },
              ]}
            />

            <Input
              label="Email"
              name="email"
              required
              value={formData.email}
              onchange={handleChange}
            />
          </form>
          <div className="relative inline-block group  mt-10">
            {/* Glossy background layer */}
            <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#30c5f0] to-[#17a2b8] group-hover:brightness-110 transition-all duration-300 ease-out z-0 shadow-lg" />

            {/* Border overlay for soft 3D effect */}
            <div className="absolute inset-0 rounded-md border border-white opacity-20 z-10 pointer-events-none" />

            {/* Main Button Content */}
            <div className="relative z-20 px-6 py-1.5 text-white font-bold rounded-md text-lg tracking-wide">
              <a href="/customer/account/create">Continue</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
