"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckBox } from "@/app/components/Input/CheckBoxI";
import { Input } from "@/app/components/Input/Input";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    assistance: false,
    showPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="w-full px-4 flex justify-center bg-white text-text18">
      <form
        action="https://energylightbulbs.co.uk/customer/account/createpost/"
        method="post"
        className="w-full py-4  rounded  space-y-6"
        autoComplete="off"
      >
        <input type="hidden" name="form_key" value="ZqQk7lfD7pj2K60u" />

        {/* Personal Info */}
        <fieldset className="space-y-4">
          <legend className="text-3xl font-semibold ">
            CREATE NEW CUSTOMER ACCOUNT
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <Input
              label="First Name"
              name="firstname"
              required
              value={formData.firstname}
              onchange={handleChange}
            />
            <Input
              label="Middle Name"
              name="middlename"
              value={formData.middlename}
              onchange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastname"
              required
              value={formData.lastname}
              onchange={handleChange}
            />
          </div>

          <CheckBox
            name="newsletter"
            label="Sign Up for Newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />

          <CheckBox
            name="assistance"
            label="Allow remote shopping assistance"
            checked={formData.assistance}
            onChange={handleChange}
          />
          <p className="text-xs text-gray-500 ml-6">
            This allows merchants to see what you see and take actions on your
            behalf.
          </p>
        </fieldset>

        {/* Sign-in Info */}
        <fieldset className="space-y-4 w-1/3">
          <Input
            label="Email"
            name="email"
            type="email"
            required
            value={formData.email}
            onchange={handleChange}
          />

          <Input
            label="Password"
            name="password"
            type={formData.showPassword ? "text" : "password"}
            required
            value={formData.password}
            onchange={handleChange}
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type={formData.showPassword ? "text" : "password"}
            required
            value={formData.confirmPassword}
            onchange={handleChange}
          />

          <CheckBox
            name="showPassword"
            label="Show Password"
            checked={formData.showPassword}
            onChange={handleChange}
          />
        </fieldset>

        {/* Submit */}
        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-bg17 hover:opacity-90 text-white rounded shadow"
          >
            Create an Account
          </button>
          <Link
            href="/customer/account/login"
            className="text-sm text-blue-600 hover:underline"
          >
            Back
          </Link>
        </div>
      </form>
    </section>
  );
}
