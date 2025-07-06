"use client";

import { useState, useRef, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCallSharp, IoSearch } from "react-icons/io5";
import { Input } from "../Input/Input";
import BasketDropdownWrapper from "./Dropdown/BasketDropdown/BasketDropdownWrapper";
import AccountDropdownWrapper from "./Dropdown/AccountDropdown/AccountDropdownWrapper";
import MobileHamburgerTrigger from "./HamburgerTrigger/MobileHamburgerTrigger";
import { categoryList } from "../category/categoryList";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="w-full h-full flex bg-bg1">
      <div className="w-full max-w-7xl px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:flex-nowrap items-start md:items-center w-full md:gap-4 gap-x-4">
          {/* Logo */}
          <div className="w-full md:w-[32%] flex-shrink-0 flex justify-center max-md:justify-start md:justify-start min-w-[200px]">
            {/* Mobile Top Row */}
            <div className="md:hidden w-full justify-between items-center flex">
              <div className="flex items-center px-4 justify-between gap-x-3 mt-2 w-full">
                <button
                  className="md:hidden text-text16"
                  onClick={() => setIsSheetOpen(true)}
                >
                  <RxHamburgerMenu size={24} />
                </button>

                <a href="/" className="flex md:hidden">
                  <img
                    src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
                    alt="logo"
                    className="h-full w-[240px] max-sm:[200px]"
                  />
                </a>

                <div className="flex-1 flex w-full items-center" />

                <div className="md:hidden flex">
                  <AccountDropdownWrapper />
                </div>

                <div className="md:hidden bg-bg3 py-2 px-3 text-text16 rounded">
                  <IoCallSharp size={20} />
                </div>
              </div>
            </div>

            {/* Logo */}
            <a href="/" className="md:flex hidden">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/logo/default/LOGO_ELB_update_100122.jpg"
                alt="logo"
                className="h-full w-full"
              />
            </a>
          </div>

          {/* Right Section */}
          <div className="flex w-full md:w-[68%] flex-col min-w-0">
            {/* Contact & Dropdowns */}
            <div className="flex w-full items-center flex-wrap gap-x-4 gap-y-2 max-[949px]:justify-start min-[950px]:justify-end">
              {/* Desktop Contact */}
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
                    className="text-text11 font-semibold text-xl hover:underline"
                  >
                    01895 55 33 00
                  </a>
                </div>
                <div className="mt-[-10px] font-light text-xs text-text4">
                  (Mon - Fri: 9.30am - 5.00pm)
                </div>
              </div>

              {/* Desktop Account + Basket */}
              <div className="flex items-center space-x-3 mt-2.5 mx-3 z-[60] relative">
                <div className="md:flex hidden">
                  <AccountDropdownWrapper />
                </div>

                <div className="hidden md:flex">
                  <BasketDropdownWrapper />
                </div>
              </div>
            </div>

            {/* Search + Mobile Basket */}
            <div className="w-full md:px-0 max-sm:px-4 sm:px-4 space-x-3 flex justify-start md:justify-end py-0 bg-gray-600 md:bg-white transition-colors duration-300">
              <div className="relative w-full max-w-xl md:mt-4 mt-0">
                <div className="sm:px-6 md:px-0 md:py-0 sm:py-2 max-sm:py-2 mr-4 ">
                  <Input
                    type="text"
                    name="search"
                    placeholder="Search entire store here..."
                    className="w-full md:py-3 py-0 text-xs sm:rounded-tl-md sm:rounded-bl-md md:rounded-none max-sm:rounded-tl-md max-sm:rounded-bl-md border border-border4 text-text4 bg-white shadow-sm placeholder:font-bold focus:outline-none md:mx-4  sm:mx-0"
                    label=""
                  />
                  <IoSearch
                    size={20}
                    className="absolute sm:right-0 md:right-4 max-sm:right-0 top-1/2 -translate-y-1/2 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Mobile Basket Dropdown */}
              <div className="md:hidden flex my-2">
                <BasketDropdownWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sheet Menu */}

      <MobileHamburgerTrigger
        isSheetOpen={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
        subcategories={categoryList[0].subcategory}
        mainCategoryName={categoryList[0].name}
      />
    </header>
  );
}
