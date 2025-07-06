"use client";

import React, { Dispatch, SetStateAction, RefObject, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setShowAccount(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [accountRef, setShowAccount]);

  const handleNavigate = (path: string) => {
    setShowAccount(false);
    router.push(path);
  };

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
          className={`absolute top-full mt-2 md:w-[200px] w-[150px] ${
            isMobile ? "left-0 -translate-x-1/2" : "right-0"
          } max-w-[90vw] bg-white text-center shadow-md rounded-md border border-border5 z-50`}
        >
          <div
            className={`absolute -top-2 ${
              isMobile ? "right-6" : "right-4"
            } w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300`}
          />

          {isMobile ? (
            <>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-text14 hover:text-text6"
                onClick={() => handleNavigate("/customer/account/login")}
              >
                My Account
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-text14 hover:text-text6"
                onClick={() => handleNavigate("/checkout/#shipping")}
              >
                Checkout
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-text14 hover:text-text6"
                onClick={() => handleNavigate("/customer/account/create")}
              >
                Register
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-text14 hover:text-text6"
                onClick={() => handleNavigate("/customer/account/login")}
              >
                Log In
              </button>
            </>
          ) : (
            <>
              <Link
                href="/customer/account/login"
                className="block px-4 py-2 text-sm text-text14 hover:text-text6"
              >
                My Account
              </Link>
              <Link
                href="/checkout/#shipping"
                className="block px-4 py-2 text-sm text-text14 hover:text-text6"
              >
                Checkout
              </Link>
              <Link
                href="/customer/account/create"
                className="block px-4 py-2 text-sm text-text14 hover:text-text6"
              >
                Register
              </Link>
              <Link
                href="/customer/account/login"
                className="block px-4 py-2 text-sm text-text14 hover:text-text6"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
