"use client";
import { CheckBox } from "@/app/components/Input/CheckBoxI";
import { Input } from "@/app/components/Input/Input";
import React from "react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full">
      <div className="min-h-screen w-full  grid grid-cols-12 gap-6 text-text18">
        {/* Registered Customers (Left Column) */}
        <div className="col-span-5  ">
          <h1 className="text-2xl font-medium mb-8 text-text17">
            REGISTERED CUSTOMERS
          </h1>
          <p className="text-sm mb-6">
            If you have an account, sign in with your email address.
          </p>

          <form className="space-y-6 w-1/2">
            <div className="flex flex-col space-y-1">
              <Input
                label="Email"
                name="email"
                type="email"
                value={email}
                onchange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Input
                label="Password"
                name="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onchange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <CheckBox
                label="Show Password"
                name="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </div>
          </form>
          <div className="flex flex-col w-full">
            <div className="relative inline-block group w-1/4 mt-12">
              {/* Background layer with shadow */}
              <div className="absolute inset-0 rounded-md bg-bg16 border-2 border-border12 group-hover:brightness-110 transition-all duration-300 ease-out z-0 shadow-xl" />

              {/* Gloss overlay for 3D shine */}
              <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#30c5f0] to-[#17a2b8] group-hover:brightness-110 transition-all duration-300 ease-out z-0 shadow-lg" />

              {/* Main Button */}
              <button className="relative z-20 w-full py-2 text-text1 font-bold rounded-md tracking-normal leading-relaxed transition-all duration-300 ease-out">
                SIGN IN
              </button>
            </div>

            <a
              href="/customer/account/forgetpassword"
              className="pt-1 leading-relaxed tracking-tight hover:text-text6  text-text19 transition-colors delay-300 ease-in-out "
            >
              Forget your password ?
            </a>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="col-span-1 flex justify-center">
          <div className="w-[1px] h-1/4 bg-gray-300" />
        </div>

        {/* Sign Up Section (Right Column) */}
        <div className="col-span-6  rounded-md">
          <h1 className="text-2xl font-light mb-2 ">NEW CUSTOMERS</h1>
          <div className="border-t mb-3 border-border3 "></div>
          <p className="text-sm mb-8 leading-4 tracking-wider ">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          <div className="relative inline-block group w-fit">
            {/* Glossy background layer */}
            <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#30c5f0] to-[#17a2b8] group-hover:brightness-110 transition-all duration-300 ease-out z-0 shadow-lg" />

            {/* Border overlay for soft 3D effect */}
            <div className="absolute inset-0 rounded-md border border-white opacity-20 z-10 pointer-events-none" />

            {/* Main Button Content */}
            <div className="relative z-20 px-6 py-3 text-white font-bold rounded-md text-lg tracking-wide">
              <a href="/customer/account/create">CREATE AN ACCOUNT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
