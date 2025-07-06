import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";

export default function MobileAccount() {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => setShow(!show);

  const closeDropdown = () => setShow(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("#mobileAccountDropdown")) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative flex md:hidden" id="mobileAccountDropdown">
      <div
        className="border-2 border-border6 flex items-center px-3 py-2 rounded-md space-x-2 hover:border-red-400 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-text14 text-xl">
          <FaRegUser />
        </span>
      </div>

      {show && (
        <div className="absolute top-full mt-2 w-[130px]   bg-bg1 text-center shadow-md rounded-md border border-border5 z-50  -translate-x-1/2 left-0">
          <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300" />

          {[
            { name: "My Account", href: "/customer/account/login" },
            { name: "Checkout", href: "/checkout/#shipping" },
            { name: "Register", href: "/customer/account/create" },
            { name: "Log In", href: "/customer/account/login" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-text14 hover:text-text6"
              onClick={closeDropdown}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
