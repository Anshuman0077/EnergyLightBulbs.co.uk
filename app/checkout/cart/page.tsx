"use client";
import { Input } from "@/app/components/Input/Input";
import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export default function CheckoutPage() {
  const [Qty, setQty] = useState("1");

  return (
    <section className="text-text18 w-full px-4 py-6">
      {/* Title and Checkout Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SHOPPING CART</h1>
        <a
          href="/checkout/#shipping"
          className="px-14 py-4 bg-[#7ac709] hover:bg-bg13 text-white font-semibold text-lg rounded shadow-xl transition-all duration-300"
        >
          PROCEED TO CHECKOUT
        </a>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-12 items-center bg-bg3 px-4 py-3 font-semibold text-sm">
        <div className="col-span-6">PRODUCT</div>
        <div className="col-span-2 text-center">PRICE</div>
        <div className="col-span-2 text-center">QTY</div>
        <div className="col-span-2 text-center">SUBTOTAL</div>
      </div>

      {/* Cart Item */}
      <div className="grid grid-cols-12 items-center px-4 py-6 border-b-1 border-border4">
        {/* Product Info */}
        <div className="col-span-6 flex gap-4 items-center">
          <img
            src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/f963b4b47690ed70ff7232e8fe5844b4/2/_/2_292_18.jpg"
            alt="Product"
            className=" h-full object-contain"
          />
          <span className="text-sm font-medium leading-snug">
            Vintage Metal Table Lamp Vintage Industrial Black Desk Lamp Scone
            Shade H3018
          </span>
        </div>

        {/* Price */}
        <div className="col-span-2 text-center flex items-center justify-center space-x-1">
          <div className="font-bold text-lg ">£28.99</div>
          <div className="text-sm text-text16 font-bold">(Incl. Vat)</div>
        </div>

        {/* Qty */}
        <div className="col-span-2 flex justify-center">
          <Input
            name="qty"
            type="text"
            value={Qty}
            onchange={(e) => setQty(e.target.value)}
            className="w-16 h-8 px-2 border border-gray-300 rounded text-center"
            label=""
          />
        </div>

        {/* Subtotal */}
        <div className="col-span-2 text-center flex items-center justify-center space-x-1">
          <div className="font-bold text-lg text-text6">£28.99</div>
          <div className="text-sm text-text16 font-bold">(Incl. Vat)</div>
        </div>

        {/* Action Icons */}
        <div className="col-span-12 flex justify-end px-20 gap-4 mt-4 text-lg text-text16">
          <span title="Edit" className="cursor-pointer">
            <MdEdit />
          </span>
          <span title="Delete" className="cursor-pointer">
            <MdDelete />
          </span>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-between py-2 mb-6 border-b-1 border-border3">
        <button className="px-4 py-2 hover:text-text6 transition-all  delay-200 ease-in text-text16 font-light  text-sm">
          EMPTY BASKET
          <div className="border-b-1 w-full flex items-center justify-center"></div>
        </button>

        <div className="flex gap-4 text-text16 font-light  text-sm">
          <button className="px-4 py-2 hover:text-text6 transition-all  delay-200 ease-in">
            CONTINUE SHOPPING
            <div className="border-b-1 w-full flex items-center justify-center"></div>
          </button>

          <button className="px-4 py-2 bg-bg3 transition-all delay-200 ease-in-out border border-border3  hover:bg-bg5 text-sm font-medium rounded">
            Update Shopping Cart
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="max-w-sm ml-auto border border-gray-200 rounded p-4 text-sm space-y-6">
        <div className="flex justify-between">
          <span className="text-gray-700">SUBTOTAL</span>
          <span>£24.16 (Excl. Tax)</span>
        </div>
        <div className="border-b-1 w-full flex items-center justify-center border-border3"></div>
        <div className="flex justify-between font-bold text-base">
          <span>ORDER TOTAL</span>

          <span className="text-orange-600">£38.98</span>
        </div>
        <div className="flex w-full items-center justify-center flex-col my-8">
          <a
            href="/checkout/#shipping"
            className="px-14 py-4 bg-[#7ac709] hover:bg-bg13 text-white font-semibold text-lg rounded shadow-xl transition-all duration-300"
          >
            PROCEED TO CHECKOUT
          </a>
          <img
            src="https://www.paypal.com/en_GB/i/btn/btn_xpressCheckout.gif"
            alt=""
            className="mt-3"
          />
        </div>
      </div>
    </section>
  );
}
