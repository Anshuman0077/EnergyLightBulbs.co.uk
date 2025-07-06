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
<section className="min-h-screen w-full flex bg-bg1 text-text18">
  <div className="w-full mx-auto md:mt-8 space-y-3 md:space-y-6">
    
    {/* Breadcrumbs */}
    <Breadcrumbs />

    {/* Page Title */}
    <legend className="text-2xl md:text-4xl font-semibold md:font-bold text-text17 tracking-tight leading-relaxed">
      ORDERS AND RETURNS
    </legend>

    <div>
      {/* Section Heading */}
      <legend className="text-lg md:text-xl font-medium md:font-semibold text-black tracking-tight leading-relaxed">
        ORDER INFORMATION
      </legend>
      <div className="hidden md:block w-1/3 mt-2 border-t border-border3" />

      {/* Form */}
      <form className="w-full max-w-md mt-6 space-y-6">
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

      {/* Continue Button */}
      <div className="relative inline-block group mt-10">
        {/* Glossy background layer */}
        <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#30c5f0] to-[#17a2b8] group-hover:brightness-110 transition-all duration-300 ease-out shadow-lg z-0" />

        {/* Soft 3D effect overlay */}
        <div className="absolute inset-0 rounded-md border border-white opacity-20 pointer-events-none z-10" />

        {/* Button content */}
        <div className="relative z-20 px-6 py-1.5 text-white text-lg font-bold tracking-wide rounded-md">
          <a href="/customer/account/create">Continue</a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
