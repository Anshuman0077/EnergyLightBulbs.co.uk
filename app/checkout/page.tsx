"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { Input } from "../components/Input/Input";
import { Select } from "../components/Input/Select";
import { BottomFoot } from "../components/footer/bottomfoot";

export default function ShippingPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");

  const countryOptions = [
    { value: "", label: "Select a country" },
    { value: "uk", label: "United Kingdom" },
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
  ];

  return (
    <main className="min-h-screen bg-white text-black w-full px-6 sm:px-12 lg:px-20 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <a href="/">
          <img
            src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
            alt="EnergyLightBulbs.co.uk Logo"
          />
        </a>

        <a
          href="/customer/account/create"
          className="text-sm text-blue-600 hover:underline"
        >
          Sign In
        </a>
      </div>

      {/* Progress Steps */}
      <div className="relative flex items-center w-full mb-10">
        {/* Full Progress Bar Container */}
        <div className="absolute top-4 left-0 h-2.5 w-1/4 bg-bg5 rounded-full overflow-hidden">
          {/* Completed part (50%) */}
          <div className="h-full bg-bg10 w-1/2"></div>
        </div>

        {/* Steps */}
        <div className="flex justify-around w-1/4  relative z-10">
          {/* Step 1: Shipping */}
          <div className="flex flex-col items-center ">
            <div className="w-12 h-12 rounded-full bg-bg1 text-text18 flex items-center justify-center text-md font-bold border-8 border-border13">
              ✓
            </div>
            <span className="text-lg font-bold text-text16">Shipping</span>
          </div>

          {/* Step 2: Review */}
          <div className="flex flex-col items-center ">
            <div className="w-12 h-12 rounded-full  text-text16 bg-bg1 flex items-center justify-center text-md font-bold border-8 border-border1">
              2
            </div>
            <span className="text-lg font-medium text-text16">
              Review & Payments
            </span>
          </div>
        </div>
      </div>
      {/* Section Title */}
      <div className="flex flex-col items-start w-full mb-6">
        <h1 className="text-2xl font-semibold mb-2">Shipping Address</h1>
        <div className="border-t border-border3 w-1/2" />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-10 w-full justify-between">
        {/* Left: Form */}
        <div className="w-full lg:w-1/3">
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <BsQuestionCircle
                  className="text-text3"
                  title="We'll use this to send order updates"
                />
              </div>
              <Input
                type="email"
                placeholder=""
                name="email"
                label=""
                className="mt-1 text-sm"
              />
              <p className="text-xs text-text3 mt-1.5">
                You can create an account after checkout.
              </p>
              <div className="border-t border-border3 my-6" />
            </div>

            {/* Name Fields */}
            <Input
              type="text"
              label="First Name"
              name="firstName"
              className="text-sm"
            />
            <Input
              type="text"
              label="Middle Name / Initial"
              name="middleName"
              className="text-sm"
            />
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              className="text-sm"
            />

            {/* Address Fields */}
            <Input
              type="text"
              label="Company"
              name="company"
              className="text-sm"
            />
            <Input
              type="text"
              label="Full Address"
              name="address"
              className="text-sm"
            />
            <Select
              label="Country"
              name="country"
              value={selectedCountry}
              options={countryOptions}
              onchange={(e) => setSelectedCountry(e.target.value)}
            />
            <Input
              type="text"
              label="City / State"
              name="city"
              className="text-sm"
            />
            <Input
              type="text"
              label="Zip / Postal Code"
              name="zip"
              className="text-sm"
            />

            {/* Phone Field with Tooltip */}
            <div className="flex items-start justify-between">
              <Input
                type="text"
                label="Phone Number"
                name="phone"
                className="text-sm w-full"
              />
              <div className="flex items-center pl-4 mt-4">
                <BsQuestionCircle
                  className="text-text3"
                  title="We'll use this to send order updates"
                />
              </div>
            </div>
          </form>
          <div className="mt-10 ">
            <div className="flex items-center justify-between ">
              <h1 className="text-lg font-semibold">Shipping Methods</h1>
              <span className="text-sm text-blue-500 hover:underline cursor-pointer">
                See our shipping policy
              </span>
            </div>

            <div className="border-t border-border4 mt-2 mb-6" />

            <div className="text-xs flex flex-col space-y-4">
              {/* Option 1 */}
              <label className="flex items-start space-x-2 cursor-pointer  p-2 rounded-md transition">
                <input
                  type="radio"
                  name="shipping"
                  className="mt-1 accent-bg17"
                />
                <div className="flex space-x-3 text-sm">
                  <span className="text-text19 font-bold text-md">£0.00</span>
                  <span className="text-gray-600">(Incl. VAT)</span>
                  <span className="text-gray-700 font-medium">Free</span>
                  <span className="text-gray-700">Free Standard Shipping</span>
                </div>
              </label>

              <div className="border-t border-border4" />

              {/* Option 2 */}
              <label className="flex items-start space-x-2 cursor-pointer  p-2 rounded-md transition">
                <input
                  type="radio"
                  name="shipping"
                  className="mt-1 accent-bg17"
                />
                <div className="flex space-x-3 text-sm">
                  <span className="text-text19 font-bold text-md">£9.99</span>
                  <span className="text-gray-600">(Incl. VAT)</span>
                  <span className="text-gray-700 font-medium">Fixed</span>
                  <span className="text-gray-700">
                    Next Working Day (Mon–Fri)
                  </span>
                </div>
              </label>

              <div className="border-t border-border4" />

              {/* Option 3 */}
              <label className="flex items-start space-x-2 cursor-pointer p-2 rounded-md transition">
                <input
                  type="radio"
                  name="shipping"
                  className="mt-1 accent-bg17"
                />
                <div className="flex  space-x-3 text-sm">
                  <span className="text-text19 font-bold text-md">£15.99</span>
                  <span className="text-gray-600">(Incl. VAT)</span>
                  <span className="text-gray-700 font-medium">Fixed</span>
                  <span className="text-gray-700">
                    IOM Delivery (Offshore Island)
                  </span>
                </div>
              </label>
            </div>

            <div className="flex w-full justify-end mt-6">
              <button className="bg-bg17 hover:bg-opacity-90 text-text1 px-6 py-2 rounded font-semibold shadow-sm transition">
                NEXT
              </button>
            </div>
          </div>
        </div>

        {/* Spacer */}

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 h-60 bg-bg3 p-6 mt-8 lg:mt-0 shadow-sm rounded-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-sm">1 Item in Cart</span>
            {isOpen ? (
              <RiArrowDropUpLine size={24} />
            ) : (
              <RiArrowDropDownLine size={24} />
            )}
          </div>
          <div className="border-b border-gray-300 mb-2" />

          <div
            className={`overflow-y-auto transition-all duration-300 mt-4 ${
              isOpen ? "opacity-100 h-full" : "opacity-0 h-0"
            }`}
          >
            <div className="flex items-start space-x-4 ">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/f963b4b47690ed70ff7232e8fe5844b4/2/_/2_292_18.jpg"
                alt="Product"
                className="h-16 w-16 object-contain"
              />
              <div className="flex-1 text-sm">
                <p className="leading-snug line-clamp-3">
                  4W LED Decorative Light Bulb Whisky Bottle Blue Gradient Glass
                  E27 Spiral Filament BLUEWHISKY
                </p>
                <p className="mt-1">Qty: 1</p>
                <p className="mt-1 font-semibold text-orange-600">
                  £47.98{" "}
                  <span className="text-gray-500 text-sm">(Incl. VAT)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
