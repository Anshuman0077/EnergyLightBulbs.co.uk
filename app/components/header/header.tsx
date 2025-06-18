"use client";

import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

export default function Header() {
   const [isFocused, setIsFocused] = useState(false);


  return (
 <header className="bg-bg1 w-full px-18">
  <div className="flex w-full items-center">
   
    <div className="w-full">
      <a href="/">
        <img
          src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
          alt="logo"
          className="h-auto"
        />
      </a>
    </div>

    
    <div className="flex w-full flex-col justify-center">
      {/* Contact & Account Section */}
      <div className="flex w-full items-center justify-end">
        {/* Contact Info */}
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
          <div className="mt-[-10px]  font-light text-xs text-text4">
            <span>(Mon - Fri: 9.30am - 5.00pm)</span>
          </div>
        </div>

        
        <div className="flex items-center space-x-3 mt-2.5 mx-3">
          
          <div className="relative group">
            <div className="border-2 border-border5 flex items-center px-3 py-2 rounded-md space-x-2 hover:border-red-400">
              <button type="button" className="font-semibold text-text14 text-md">MY ACCOUNT</button>
              <MdArrowDropDown size={28} className="text-text14" />
            </div>
            <div className="absolute top-full right-0 left-0 mt-4.5 w-48 bg-white text-center shadow-md rounded-md border border-border5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
              <a href="/account" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
                My Account
              </a>
              <a href="/checkout" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
                Checkout
              </a>
              <a href="/Register" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
                Register
              </a>
              <a href="/login" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
                Log In
              </a>
            </div>
          </div>

         
          <div className="relative group">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-bg7 text-white font-bold cursor-pointer">
              <button type="button" className="text-md">BASKET</button>
              <LuShoppingBasket />
              <MdArrowDropDown className="text-text19 text-lg" />
            </div>
            <div className="absolute right-0 mt-4.5 w-80 bg-white border border-gray-300 shadow-lg rounded-md z-50 hidden group-hover:block">
              <div className="flex w-full justify-end">
                <RxCross2 className="cursor-pointer m-2" />
              </div>
              <div className="absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
              <div className="p-6 text-gray-800 font-semibold text-sm">
                You have no items in your shopping cart.
              </div>
            </div>
          </div>
        </div>
      </div>

     
     <div className="flex w-full justify-end mt-4">
      <div
        className={`flex items-center w-full max-w-xl px-4  border transition-all duration-300
          ${isFocused ? 'border-border9 shadow-lg shadow-blue-custom' : 'border-border5'}`}
      >
        <input
          type="text"
          name="search"
          placeholder="Search entire store here..."
          className="text-text4 bg-transparent focus:outline-none w-full py-3 px-1  placeholder:font-bold placeholder:text-text18 placeholder:text-sm transition-all duration-300"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <IoSearch
          size={22}
          className={`ml-2 transition-colors duration-300 ${
            isFocused ? 'text-text12' : 'text-text3'
          }`}
        />
      </div>
    </div>
    </div>
  </div>
</header>

  );

  return (
    <header className="bg-bg1 w-full border-b border-gray-200">
      <div className="flex items-start justify-between max-w-screen-xl mx-auto px-6 py-4 gap-10">
        {/* Left: Logo */}
        <div className="w-full">
          <a href="/" className="flex items-start">
            <img 
              src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
              alt="Logo"
              className="h-auto"
            />
          </a>
        </div>

        <div className="flex-1 flex w-full"></div>

        {/* Right Side */}
        <div className="flex flex-col items-start w-full gap-2">
          {/* Row 1: Contact + Buttons */}
          <div className="flex justify-end space-x-3 items-start w-full">
            {/* Contact Info */}
            <div className="flex items-center space-x-1">
              <span className="text-text5 font-semibold text-xl">CALL</span>
              <a
                href="/call"
                className="text-text11 font-semibold text-sm hover:underline"
              >
                01895553300
              </a>
            </div>

            {/* MY ACCOUNT Dropdown */}
            <div className="relative group">
              <div className="border border-border1 flex items-center px-3 py-1.5 rounded-md ">
                <button className="font-semibold text-text14 text-sm">
                  MY ACCOUNT
                </button>
                <MdArrowDropDown size={20} />
              </div>

              <div className="absolute top-full right-0 left-0 mt-2 w-52 bg-white border border-border2 text-center shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
                <a
                  href="/account"
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
                  href="/Register"
                  className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                >
                  Register
                </a>
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-text14 hover:text-text6"
                >
                  Log In
                </a>
              </div>
            </div>

            {/* BASKET Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-bg7 text-white font-bold cursor-pointer">
                <button type="button">BASKET</button>
                <LuShoppingBasket />
                <MdArrowDropDown />
              </div>

              <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-300 shadow-lg rounded-md z-50 hidden group-hover:block">
                <div className="flex w-full justify-end">
                  <RxCross2 className="cursor-pointer m-2" />
                </div>
                <div className="absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300"></div>
                <div className="p-6 text-gray-800 font-semibold text-sm">
                  You have no items in your shopping cart.
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Opening Hours */}
          <div className="flex flex-col w-full ">
            <div className="flex justify- w-full">
              <span className="text-text4 text-xs font-light">
                (Mon - Fri: 9:30am - 5pm)
              </span>
            </div>

            <div className="flex items-center border border-border2 bg-bg1 px-3 py-2 rounded-md w-full justify-end">
              <input
                type="search"
                placeholder="Search entire store here..."
                className="w-full text-sm text-text14 font-semibold outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



  // useEffect(() => {
  //   const basketBtn = document.getElementById("basketBtn");
  //   const basketDropdown = document.getElementById("basketDropdown");

  //   function handleToggle(e: MouseEvent) {
  //     e.stopPropagation();
  //     basketDropdown?.classList.toggle("hidden");
  //   }

  //   function handleClickOutside(e: MouseEvent) {
  //     const target = e.target as Node;
  //     if (
  //       basketDropdown &&
  //       !basketDropdown.contains(target) &&
  //       basketBtn &&
  //       !basketBtn.contains(target)
  //     ) {
  //       basketDropdown.classList.add("hidden");
  //     }
  //   }

  //   function closeByCross() {
  //     basketDropdown?.classList.add("hidden");
  //   }

  //   basketBtn?.addEventListener("click", handleToggle);
  //   document.addEventListener("click", handleClickOutside);

  //   // ⚠️ Delay attaching btnClose until it's actually in the DOM
  //   const observer = new MutationObserver(() => {
  //     const btnClose = document.getElementById("btnClose");
  //     if (btnClose) {
  //       btnClose.addEventListener("click", closeByCross);
  //     }
  //   });

  //   observer.observe(document.body, { childList: true, subtree: true });

  //   return () => {
  //     basketBtn?.removeEventListener("click", handleToggle);
  //     document.removeEventListener("click", handleClickOutside);

  //     const btnClose = document.getElementById("btnClose");
  //     if (btnClose) {
  //       btnClose.removeEventListener("click", closeByCross);
  //     }

  //     observer.disconnect();
  //   };
  // }, []);