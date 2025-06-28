"use client";

import { useState, useRef, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { MdArrowDropDown, MdDelete, MdEdit } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Input } from "../Input/Input";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [Qty, setQty] = useState("");

  const accountRef = useRef<HTMLDivElement>(null);
  const basketRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(e.target as Node)
      ) {
        setShowAccount(false);
      }
      if (basketRef.current && !basketRef.current.contains(e.target as Node)) {
        setShowBasket(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-bg1 w-full px-18">
      <div className="flex w-full items-center">
        {/* Logo */}
        <div className="w-full">
          <a href="/">
            <img
              src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
              alt="logo"
              className="h-auto"
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex w-full flex-col justify-center">
          {/* Contact & Dropdowns */}
          <div className="flex w-full items-center justify-end">
            {/* Contact */}
            <div className="flex flex-col items-center mt-3">
              <div className="flex w-full items-center space-x-1">
                <div className="pt-3">
                  <FaPhoneAlt className="text-text5" size={30} />
                </div>
                <div>
                  <span className="text-text5 font-bold text-xl">Call</span>
                </div>
                <a
                  href="/call"
                  className="text-text11 font-semibold text-xl hover:underline px-1"
                >
                  01895 55 33 00
                </a>
              </div>
              <div className="mt-[-10px] font-light text-xs text-text4">
                (Mon - Fri: 9.30am - 5.00pm)
              </div>
            </div>

            {/* Account & Basket Dropdowns */}
            <div className="flex items-center space-x-3 mt-2.5 mx-3 z-[60] relative ">
              {/* Account */}
              <div className="relative" ref={accountRef}>
                <div
                  className="border-2 border-border5 flex items-center px-3 py-2 rounded-md space-x-2 hover:border-red-400 cursor-pointer"
                  onClick={() => setShowAccount((prev) => !prev)}
                >
                  <span className="font-semibold text-text14 text-md">
                    MY ACCOUNT
                  </span>
                  <MdArrowDropDown size={28} className="text-text14" />
                </div>
                {showAccount && (
                  <div className="absolute  top-full right-0 left-0 mt-2 w-48 bg-white text-center shadow-md rounded-md border border-border5 z-50">
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
                    <a
                      href="/customer/account/login"
                      className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                    >
                      My Account
                    </a>
                    <a
                      href="/checkout"
                      className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                    >
                      Checkout
                    </a>
                    <a
                      href="/customer/account/create"
                      className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                    >
                      Register
                    </a>
                    <a
                      href="/customer/account/login"
                      className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                    >
                      Log In
                    </a>
                  </div>
                )}
              </div>

              {/* Basket */}
              <div className="relative" ref={basketRef}>
                <div
                  className="flex items-center space-x-2 px-4 py-2 rounded-md bg-bg7 text-white font-bold cursor-pointer"
                  onClick={() => setShowBasket((prev) => !prev)}
                >
                  <span className="text-md">BASKET</span>
                  <LuShoppingBasket />
                  <MdArrowDropDown className="text-text19 text-lg" />
                </div>

                {showBasket && (
                  <div className="absolute right-0 mt-5 w-96 bg-white border border-gray-300 shadow-lg rounded-md z-50">
                    <div className="flex w-full justify-end">
                      <RxCross2
                        className="cursor-pointer m-2"
                        onClick={() => setShowBasket(false)}
                      />
                    </div>
                    <div className="absolute -top-3 right-5 w-6 h-6 bg-white rotate-45 border-l border-t border-gray-300"></div>
                    <div className="p-6 hidden text-gray-800 font-semibold text-sm">
                      You have no items in your shopping cart.
                    </div>
                    <div className="w-full flex h-full text-text18">
                      <div className="flex w-full flex-col ">
                        {/* Cart Info Section */}
                        <div className="px-8 flex flex-col h-full w-full ">
                          {/* Top Row: Left and Right */}
                          <div className="flex justify-between items-center w-full">
                            <span>1 Item in Cart</span>
                            <span className="">Cart Subtotal:</span>
                          </div>

                          {/* Price & VAT */}
                          <div className="flex justify-end   items-center space-x-2  text-lg  font-bold tracking-tight leading-3">
                            <span className="text-text6">£23.99</span>
                            <span className="text-text18 text-sm font-light">
                              (Incl. Vat)
                            </span>
                          </div>
                        </div>
                        <div className="flex w-full items-center justify-center mt-4">
                          <a
                            href="/checkout/#shipping"
                            className="px-16 py-3 bg-[#7ac709] hover:bg-bg13 text-white font-semibold text-lg rounded shadow-xl transition-all duration-300"
                          >
                            PROCEED TO CHECKOUT
                          </a>
                        </div>

                        {/* PayPal Checkout Image */}
                        <div className="w-full flex items-center justify-center mt-3 mb-5">
                          <img
                            src="https://www.paypal.com/en_GB/i/btn/btn_xpressCheckout.gif"
                            alt="payment checkout"
                            className="content-center"
                          />
                        </div>
                        {/* Bottom Divider */}
                        <div className="border-t-1 w-full   border-border4 " />
                        <div className="text-text18  mb-8 w-full">
                          {/* Product Block - Only this gets the bottom border */}
                          <div className="flex w-full justify-between gap-4 pb-4 border-b my-4 border-border4">
                            {/* Product Image */}
                            <div className="w-20 h-20">
                              <img
                                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/f963b4b47690ed70ff7232e8fe5844b4/2/_/2_292_18.jpg"
                                alt="Product"
                                className="h-full w-full object-contain"
                              />
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col justify-between flex-1">
                              {/* Title */}
                              <span className="text-sm font-medium leading-snug">
                                4W LED Decorative Light Bulb Whisky Bottle Blue
                                Gradient Glass E27 Spiral Filament BLUEWHISKY
                              </span>

                              {/* Price */}
                              <div className="text-lg text-text6 font-semibold flex items-center gap-2">
                                <span>£23.99</span>
                                <span className="text-sm font-medium text-text18">
                                  (Incl. Vat)
                                </span>
                              </div>

                              {/* Qty and Icons */}
                              <form className="flex items-center justify-between mt-2">
                                {/* Qty Input */}
                                <div className="flex items-center gap-2">
                                  <label
                                    htmlFor="qty"
                                    className="text-sm font-medium"
                                  >
                                    Qty:
                                  </label>
                                  <Input
                                    name="qty"
                                    type="text"
                                    value={Qty}
                                    onchange={(e) => setQty(e.target.value)}
                                    className="w-16 h-8 px-2 border border-gray-300 rounded"
                                    label=""
                                  />
                                </div>

                                {/* Action Icons (Edit/Delete) */}
                                <div className="flex items-center gap-4 px-6 text-lg text-text12 cursor-pointer">
                                  <span title="Edit">
                                    <MdEdit />
                                  </span>
                                  <span title="Delete">
                                    <MdDelete />
                                  </span>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* View/Edit Cart (stays separated) */}
                          <div className="text-center mt-4">
                            <a
                              href="/checkout/cart"
                              className="text-sm hover:text-text6 text-text17 transition-colors ease-in-out delay-200 font-medium"
                            >
                              View and Edit Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="flex w-full justify-end mt-4">
            <div
              className={`flex items-center w-full max-w-xl px-4 border transition-all duration-300 ${
                isFocused
                  ? "border-border9 shadow-lg shadow-blue-custom"
                  : "border-border5"
              }`}
            >
              <input
                type="text"
                name="search"
                placeholder="Search entire store here..."
                className="text-text4 bg-transparent focus:outline-none w-full py-3 px-1 placeholder:font-bold placeholder:text-text18 placeholder:text-sm transition-all duration-300"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <IoSearch
                size={22}
                className={`ml-2 transition-colors duration-300 ${
                  isFocused ? "text-text12" : "text-text3"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
