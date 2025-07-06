"use client";

import React from "react";
import DesktopBasketDropdown from "./DesktopBasket";
import MobileBasketDropdown from "./MobileBasket";

export default function BasketDropdownWrapper() {
  return (
    <>
      {/* Mobile Basket (only visible on <768px screens) */}
      <div className="md:hidden">
        <MobileBasketDropdown />
      </div>

      {/* Desktop/Tablet Basket (visible from md and up) */}
      <div className="hidden md:block">
        <DesktopBasketDropdown />
      </div>
    </>
  );
}
