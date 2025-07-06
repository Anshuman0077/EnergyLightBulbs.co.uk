"use client";

import React, { Dispatch, SetStateAction, RefObject, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

interface AccountDropdownProps {
  isMobile?: boolean;
  showAccount: boolean;
  setShowAccount: Dispatch<SetStateAction<boolean>>;
  accountRef: RefObject<HTMLDivElement | null>;
}

export const AccountDropdown: React.FC<AccountDropdownProps> = ({
  isMobile = false,
  showAccount,
  setShowAccount,
  accountRef,
}) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setShowAccount(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [accountRef, setShowAccount]);

  return (
    <div
      className={`relative ${isMobile ? "flex md:hidden" : "hidden md:flex"}`}
      ref={accountRef}
    >
      <div
        className={`border-2 ${
          isMobile ? "border-border6" : "border-border5"
        } flex items-center px-3 py-2 rounded-md space-x-2 hover:border-red-400 cursor-pointer`}
        onClick={() => setShowAccount((prev) => !prev)}
      >
        <span
          className={`${
            isMobile
              ? "text-text14 text-xl"
              : "font-semibold text-text14 text-md md:text-sm lg:text-md xl:text-md"
          }`}
        >
          {isMobile ? <FaRegUser size={20} /> : "MY ACCOUNT"}
        </span>
        {!isMobile && <MdArrowDropDown size={28} className="text-text14" />}
      </div>

      {showAccount && (
        <div
          className={`absolute top-full mt-2 w-[200px] ${
            isMobile ? "left-1/2 -translate-x-1/3" : "right-0"
          } max-w-[90vw] bg-white text-center shadow-md rounded-md border border-border5 z-50`}
        >
          <div
            className={`absolute -top-2 ${
              isMobile ? "right-2" : "right-4"
            } w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300`}
          />
          <a href="/customer/account/login" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
            My Account
          </a>
          <a href="/checkout/#shipping" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
            Checkout
          </a>
          <a href="/customer/account/create" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
            Register
          </a>
          <a href="/customer/account/login" className="block px-4 py-2 text-sm text-text14 hover:text-text6">
            Log In
          </a>
        </div>
      )}
    </div>
  );
};
