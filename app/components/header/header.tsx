"use client";

import { useState, useRef, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

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
      if (
        basketRef.current &&
        !basketRef.current.contains(e.target as Node)
      ) {
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
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 shadow-lg rounded-md z-50">
                    <div className="flex w-full justify-end">
                      <RxCross2
                        className="cursor-pointer m-2"
                        onClick={() => setShowBasket(false)}
                      />
                    </div>
                    <div className="absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
                    <div className="p-6 text-gray-800 font-semibold text-sm">
                      You have no items in your shopping cart.
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
