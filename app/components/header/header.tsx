"use client";

import { useState, useRef, useEffect } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { MdArrowDropDown, MdDelete, MdEdit } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
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
    <header className="bg-bg1 w-full px-4 sm:px-3 md:px-6 lg:px-8 xl:px-10 2xl:px-16">
      <div className="flex flex-col md:flex-row md:flex-nowrap items-start md:items-center w-full md:gap-4 gap-x-4">
        {/* Logo */}
        <div className="w-full md:w-[32%] flex-shrink-0 flex justify-center max-md:justify-start md:justify-start min-w-[200px]">
          <div className="md:hidden  w-full justify-between items-center px-3 flex">
            <div className=" flex items-center justify-between mt-3 w-full ">
              <div className="md:hidden text-text18">
                <RxHamburgerMenu />
              </div>
              <div className="relative">
                <div
                  className="border-2 border-border5 flex items-center px-3 py-2 rounded hover:border-red-400 cursor-pointer"
                  onClick={() => setShowAccount((prev) => !prev)}
                >
                  <span className="font-semibold text-text14 text-xl">
                    <FaUser />
                  </span>
                </div>

                {showAccount && (
                  <div className="absolute top-full  mt-2  w-[23vw] left-1/2 -translate-x-34 bg-white text-start shadow-md rounded-md border border-border5 z-50">
                    <div className="absolute -top-2  right-2  -translate-x-1/12 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300" />
                    <a
                      href="/customer/account/login"
                      className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                    >
                      My Account
                    </a>
                    <a
                      href="/checkout/#shipping"
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
            </div>
          </div>

          <a href="/" className="md:flex hidden">
            <img
              src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
              alt="logo"
              className="h-auto w-[250px] md:w-[280px] lg:w-[300px]"
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex w-full md:w-[68%] flex-col min-w-0">
          {/* Contact & Dropdowns */}
          <div className="flex w-full items-center flex-wrap gap-x-4 gap-y-2 max-[949px]:justify-start min-[950px]:justify-end">
            {/* Contact */}
            <div className="flex-col items-center mt-3 md:flex hidden">
              <div className="flex w-full items-center space-x-1">
                <div className="pt-3">
                  <FaPhoneAlt className="text-text5" size={30} />
                </div>
                <div>
                  <span className="text-text5 font-bold text-xl">Call</span>
                </div>
                <a
                  href="/call"
                  className="text-text11 font-semibold text-xl  hover:underline "
                >
                  01895 55 33 00
                </a>
              </div>
              <div className="mt-[-10px] font-light text-xs text-text4 ">
                (Mon - Fri: 9.30am - 5.00pm)
              </div>
            </div>

            {/* Account & Basket Dropdowns */}
            <div className="flex  items-center space-x-3 mt-2.5 mx-3 z-[60] relative ">
              {/* Account */}
              <div className="relative hidden md:flex " ref={accountRef}>
                <div
                  className="border-2 border-border5 flex  items-center px-3 py-2 rounded-md space-x-2 hover:border-red-400 cursor-pointer"
                  onClick={() => setShowAccount((prev) => !prev)}
                >
                  <span className="font-semibold text-text14 text-md md:text-sm lg:text-md xl:text-md">
                    MY ACCOUNT
                  </span>

                  <MdArrowDropDown size={28} className="text-text14 hidden" />
                </div>
                {showAccount && (
                  <div className="absolute top-full right-0 mt-2 w-[200px] max-w-[90vw] bg-white text-center shadow-md rounded-md border border-border5 z-50">
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
                    <a
                      href="/customer/account/login"
                      className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                    >
                      My Account
                    </a>
                    <a
                      href="/checkout/#shipping"
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
            <div className="relative md:flex mx-3 hidden " ref={basketRef}>
              <div
                className="flex items-center space-x-2 px-4   rounded-md bg-bg7 text-white font-bold cursor-pointer"
                onClick={() => setShowBasket((prev) => !prev)}
              >
                <span className="text-md">BASKET</span>
                <LuShoppingBasket />
                <MdArrowDropDown className="text-text19 text-lg" />
              </div>
              {showBasket && (
                <div
                  className={`absolute top-full z-50 mt-2 rounded-md border border-gray-300 shadow-md bg-white
      w-[95vw] max-w-md md:w-96 md:right-0 md:left-auto left-1/2 -translate-x-1/2 md:translate-x-0`}
                >
                  {/* Arrow on desktop */}
                  <div
                    className={`hidden md:block absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300`}
                  ></div>

                  {/* Close button */}
                  <div className="flex justify-end p-2">
                    <RxCross2
                      className="cursor-pointer"
                      onClick={() => setShowBasket(false)}
                    />
                  </div>

                  {/* Empty message (if needed) */}
                  {/* <div className="p-6 text-gray-800 font-semibold text-sm">
      You have no items in your shopping cart.
    </div> */}

                  {/* Basket Content */}
                  <div className="w-full flex flex-col p-4 text-text18">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                      <span>1 Item in Cart</span>
                      <span>Cart Subtotal:</span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-end items-center gap-2 text-lg font-bold">
                      <span className="text-text6">£23.99</span>
                      <span className="text-text18 text-sm font-light">
                        (Incl. Vat)
                      </span>
                    </div>

                    {/* Checkout Button */}
                    <div className="flex justify-center mt-4">
                      <a
                        href="/checkout/#shipping"
                        className="px-6 py-3 bg-[#7ac709] hover:bg-bg13 text-white font-semibold text-lg rounded shadow-xl"
                      >
                        PROCEED TO CHECKOUT
                      </a>
                    </div>

                    {/* PayPal Image */}
                    <div className="flex justify-center mt-4">
                      <img
                        src="https://www.paypal.com/en_GB/i/btn/btn_xpressCheckout.gif"
                        alt="payment checkout"
                      />
                    </div>

                    <div className="border-t my-4 border-border4" />

                    {/* Product Line */}
                    <div className="flex justify-between gap-4 pb-4 border-b mb-4 border-border4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/f963b4b47690ed70ff7232e8fe5844b4/2/_/2_292_18.jpg"
                          alt="Product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <span className="text-sm font-medium leading-snug">
                          4W LED Decorative Light Bulb Whisky Bottle Blue
                          Gradient Glass E27 Spiral Filament BLUEWHISKY
                        </span>
                        <div className="text-lg text-text6 font-semibold flex items-center gap-2">
                          <span>£23.99</span>
                          <span className="text-sm font-medium text-text18">
                            (Incl. Vat)
                          </span>
                        </div>

                        <form className="flex justify-between items-center mt-2">
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
                              label=""
                              onchange={(e) => setQty(e.target.value)}
                              className="w-16 h-8 px-2 border border-gray-300 rounded"
                            />
                          </div>
                          <div className="flex items-center gap-4 text-lg text-text12 cursor-pointer">
                            <MdEdit title="Edit" />
                            <MdDelete title="Delete" />
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* View Cart */}
                    <div className="text-center">
                      <a
                        href="/checkout/cart"
                        className="text-sm hover:text-text6 text-text17 transition-colors ease-in-out delay-200 font-medium"
                      >
                        View and Edit Cart
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>

          <div className="flex  w-full md:justify-end justify-start md:py-4 py-0">
            <div className="relative w-full max-w-xl md:mt-4 mt-0">
              {/* Input field */}
              <Input
                type="text"
                name="search"
                placeholder="Search entire store here..."
                className="w-full md:py-3 py-0 pl-4  rounded-md border border-border4 text-text4 bg-white shadow-sm placeholder:font-bold placeholder:text-text18 placeholder:text-sm focus:outline-none"
                label=""
              />

              <IoSearch
                size={20}
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                  isFocused ? "text-text12" : "text-text3"
                }`}
              />
            </div>
            <div className="relative flex mx-3 md:hidden " ref={basketRef}>
              <div
                className="flex items-center space-x-2 px-4   rounded-md bg-bg7 text-white font-bold cursor-pointer"
                onClick={() => setShowBasket((prev) => !prev)}
              >
                <span className="text-md">BASKET</span>
                <LuShoppingBasket />
                <MdArrowDropDown className="text-text19 text-lg" />
              </div>
              {showBasket && (
                <div
                  className={`absolute top-full z-50 mt-2 rounded-md border border-gray-300 shadow-md bg-white w-[95vw] max-w-md md:w-96 md:right-0 md:left-auto left-1/2  -translate-x-96`}
                >
                  {/* Arrow on desktop */}
                  <div
                    className={`hidden md:block absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300`}
                  ></div>

                  {/* Close button */}
                  <div className="flex justify-end p-2">
                    <RxCross2
                      className="cursor-pointer"
                      onClick={() => setShowBasket(false)}
                    />
                  </div>

                  {/* Empty message (if needed) */}
                  <div className="p-6 hidden text-gray-800 font-semibold text-sm">
                      You have no items in your shopping cart.
                   </div>

                  {/* Basket Content */}
                  <div className="w-full flex flex-col px-4 text-text18">
                    {/* Header */}
                    <div className="flex justify-between items-center ">
                      <span>1 Item in Cart</span>
                      <span>Cart Subtotal:</span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-end items-center gap-2 text-lg font-bold">
                      <span className="text-text6">£23.99</span>
                      <span className="text-text18 text-sm font-light">
                        (Incl. Vat)
                      </span>
                    </div>

                    {/* Checkout Button */}
                    <div className="flex justify-center mt-1">
                      <a
                        href="/checkout/#shipping"
                        className="px-6 py-2 bg-[#7ac709] hover:bg-bg13 text-white font-semibold text-lg rounded shadow-xl"
                      >
                        PROCEED TO CHECKOUT
                      </a>
                    </div>

                    {/* PayPal Image */}
                    <div className="flex justify-center mt-2">
                      <img
                        src="https://www.paypal.com/en_GB/i/btn/btn_xpressCheckout.gif"
                        alt="payment checkout"
                      />
                    </div>

                    <div className="border-t my-2 border-border4" />

                    {/* Product Line */}
                    <div className="flex justify-between gap-4 pb-4 border-b  border-border4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/f963b4b47690ed70ff7232e8fe5844b4/2/_/2_292_18.jpg"
                          alt="Product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <span className="text-sm font-medium leading-snug">
                          4W LED Decorative Light Bulb Whisky Bottle Blue
                          Gradient Glass E27 Spiral Filament BLUEWHISKY
                        </span>
                        <div className="text-lg text-text6 font-semibold flex items-center gap-2">
                          <span>£23.99</span>
                          <span className="text-sm font-medium text-text18">
                            (Incl. Vat)
                          </span>
                        </div>

                        <form className="flex justify-between items-center mt-2">
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
                              label=""
                              onchange={(e) => setQty(e.target.value)}
                              className="w-16 h-8 px-2 border border-gray-300 rounded"
                            />
                          </div>
                          <div className="flex items-center gap-4 text-lg text-text12 cursor-pointer">
                            <MdEdit title="Edit" />
                            <MdDelete title="Delete" />
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* View Cart */}
                    <div className="text-center my-4">
                      <a
                        href="/checkout/cart"
                        className="text-sm hover:text-text6 text-text17 transition-colors ease-in-out delay-200 font-medium"
                      >
                        View and Edit Cart
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
