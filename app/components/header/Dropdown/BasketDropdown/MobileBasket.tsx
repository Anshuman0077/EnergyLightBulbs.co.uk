"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { MdArrowDropDown, MdDelete, MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Input } from "../../../Input/Input";

export default function MobileBasketDropdown() {
  const [showBasket, setShowBasket] = useState(false);
  const [Qty, setQty] = useState("1");
  const basketRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (basketRef.current && !basketRef.current.contains(e.target as Node)) {
        setShowBasket(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div
      className="relative flex items-center justify-center md:hidden"
      ref={basketRef}
    >
      {/* Basket Button */}
      <div
        className="flex items-center  space-x-2 px-3 md:py-2 py-1 rounded-md bg-bg7 text-white font-bold cursor-pointer"
        onClick={() => setShowBasket((prev) => !prev)}
      >
        <span className="text-md">BASKET</span>
        <LuShoppingBasket />
        <MdArrowDropDown className="text-text19 text-lg" />
      </div>

      {/* Dropdown */}
      {showBasket && (
        <div className="absolute top-full z-50 mt-2 rounded-md border border-gray-300 shadow-md bg-white  max-w-md  left-0 -translate-x-1/2 md:translate-x-0">
          <div className="absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300" />

          <div className="flex justify-end p-3 text-text18">
            <RxCross2
              className="cursor-pointer"
              onClick={() => setShowBasket(false)}
            />
          </div>

          <div className="p-6 hidden text-gray-800 font-semibold text-sm">
            You have no items in your shopping cart.
          </div>

          <div className="w-full flex flex-col px-4 mb-4  text-text18">
            <div className="flex justify-between items-center ">
              <span>1 Item in Cart</span>
              <span>Cart Subtotal:</span>
            </div>

            <div className="flex justify-end items-center gap-2 text-lg font-bold">
              <span className="text-text6">£23.99</span>
              <span className="text-text18 text-sm font-light">
                (Incl. Vat)
              </span>
            </div>

            <div className="flex justify-center mt-4">
              <a
                href="/checkout/#shipping"
                className="px-6 py-2 bg-[#7ac709] hover:bg-bg13 text-white font-semibold text-sm rounded shadow-xl"
              >
                PROCEED TO CHECKOUT
              </a>
            </div>

            <div className="flex justify-center mt-4">
              <img
                src="https://www.paypal.com/en_GB/i/btn/btn_xpressCheckout.gif"
                alt="payment checkout"
              />
            </div>

            <div className="border-t my-4 border-border4" />

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
                  4W LED Decorative Light Bulb Whisky Bottle Blue Gradient Glass
                </span>
                <div className="text-lg text-text6 font-semibold flex items-center gap-2">
                  <span>£23.99</span>
                  <span className="text-sm font-medium text-text18">
                    (Incl. Vat)
                  </span>
                </div>

                <form className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="qty" className="text-sm font-medium">
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

            <div className="text-center">
              <a
                href="/checkout/cart"
                className="text-sm hover:text-text6 text-text17 font-medium"
              >
                View and Edit Cart
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
