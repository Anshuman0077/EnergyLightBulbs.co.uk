"use client";

import React from "react";
import DesktopBasketDropdown from "./DesktopBasket";
import MobileBasketDropdown from "./MobileBasket";

export default function BasketDropdownWrapper() {
  return (
    <>
      <div className="md:hidden">
        <MobileBasketDropdown />
      </div>
      
      <div className="hidden md:block">
        <DesktopBasketDropdown />
      </div>
    </>
  );
}
