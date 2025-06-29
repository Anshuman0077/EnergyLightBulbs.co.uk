"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Input } from "../components/Input/Input";
import { BsQuestionCircle } from "react-icons/bs";
import { Select } from "../components/Input/Select";

export default function ShippingPage() {
  const [isOpen, setIsOpen] = useState(true);
  const countryOptions = [
    { value: "", label: "Select a country" },
    { value: "uk", label: "United Kingdom" },
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <main className="min-h-screen bg-white text-black w-full px-6 sm:px-12 lg:px-20 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <img
          src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
          alt="EnergyLightBulbs.co.uk"
          className=""
        />
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Sign In
        </a>
      </div>

      {/* Progress Steps */}
      <div className="relative flex justify-start items-center w-full mb-10">
        {/* Horizontal progress bar (background line) */}
        <div className="absolute top-4 w-1/4 h-2 bg-bg8 rounded-full" />

        {/* Steps above the progress line */}
        <div className="flex justify-around w-1/4 relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center justify-center ">
            <div className="w-10 h-10 rounded-full bg-bg1  text-text18  flex  items-center justify-center text-md font-bold border-8 border-border8">
              ✓
            </div>
            <span className="text-lg  font-bold text-text16 ">Shipping</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center  justify-center">
            <div className="w-10 h-10 rounded-full border-8 border-border19  text-text16 flex items-center justify-center text-md font-bold bg-white">
              2
            </div>
            <span className="text-lg font-medium text-text16 ">
              Review & Payments
            </span>
          </div>
        </div>
      </div>

      {/* Section Title */}

      <div className="flex flex-col items-start justify-start w-full ">
        <h1 className="text-2xl font-semibold mb-4">Shipping Address</h1>
        <div className="border-t-1 items-center justify-start flex w-1/2 mb-6 border-border3" />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-10 w-full  justify-between">
        {/* Left: Form */}
        <div className="w-1/2">
          <form className="flex-1 space-y-6 ">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 "
                >
                  Email Address
                </label>
              </div>
              <div className="flex items-end justify-end mt-[-16px]">
                <BsQuestionCircle
                  className="text-text3"
                  title="We'll use this to send order updates"
                />
              </div>
              <Input
                type="email"
                placeholder=""
                name="email"
                label={""}
                className="mt-1 text-sm"
              />

              <p className="text-xs text-text3 mt-1.5">
                You can create an account after checkout.
              </p>
              <div className="border-t-1 border-border3 my-6 mt-12" />
            </div>
            <div>
              <Input
                type="text"
                label="Firt Name"
                name="firstName"
                className="text-sm"
              />
            </div>
            <div>
              <Input
                type="name"
                label=" Middle Name/Initial"
                name="middleName"
                className="text-sm"
              />
            </div>
            <div>
              <Input
                type="text"
                label="Last Name"
                name="lastname"
                className="text-sm"
              />
            </div>
            <div>
              <Input
                type="text"
                label="Company"
                name="company"
                className="text-sm"
              />
            </div>
            <div>
              <Input
                type="text"
                label="Full Address"
                name="address"
                className="text-sm"
              />
            </div>
            <div>
              <Select
                label="Country"
                name="Country"
                value={selectedCountry}
                options={countryOptions}
                onchange={(e) => setSelectedCountry(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="text"
                label="Country / City"
                name="address"
                className="text-sm"
              />
            </div>
            <div>
              <Input
                type="text"
                label="Zip/Postal Code"
                name="address"
                className="text-sm"
              />
            </div>
            <div className=" flex items-center mt-3  justify-between">
              <Input
                type="text"
                label="Phone number"
                name="address"
                className="text-sm w-full"
              />
              <div className="flex flex-1 w-full pl-4">
                <BsQuestionCircle
                  className="text-text3 mt-4 "
                  title="We'll use this to send order updates"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 bg-bg3 h-60 p-6 mt-8 lg:mt-0 shadow-sm rounded-sm flex flex-col justify-start">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-sm">1 Items in Cart</span>
            {isOpen ? (
              <RiArrowDropUpLine size={24} />
            ) : (
              <RiArrowDropDownLine size={24} />
            )}
          </div>

          <div className="border-b border-gray-300 mb-2" />

          {/* Dropdown Container (fixed height + scrollable if needed) */}
          <div
            className={`overflow-y-auto transition-opacity duration-300 ${
              isOpen ? "opacity-100 h-full" : "opacity-0 h-0"
            }`}
          >
            <div className="flex items-start space-x-4">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/f963b4b47690ed70ff7232e8fe5844b4/2/_/2_292_18.jpg"
                alt=""
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
                  <span className="text-gray-500 text-sm">(Incl. Vat)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
