import React from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

export default function DeliveryPage() {
  return (
<div className="flex flex-col w-full px-10 mt-6 text-text18 text-sm">
  {/* Breadcrumb */}
  <div className="mb-5">
    <Breadcrumbs />
  </div>

  {/* Page Title */}
  <h1 className="mb-14 text-3xl font-semibold text-black">Delivery</h1>

  <div className="space-y-10 leading-5 tracking-tight">
    {/* Free Delivery Section */}
    <div>
      <h3 className="font-semibold text-base mb-2">
        Free Delivery for all orders with no minimum order value!
      </h3>
      <p>
        Delivery in the United Kingdom is FREE for all orders with no minimum order value.
      </p>
      <p>
        All orders received before 4pm will be despatched the same day. Free delivery 5-6 days.
      </p>
    </div>

    {/* Next Day Delivery */}
    <div className="leading-5 tracking-tight">
      <h3 className="font-semibold text-base mb-2">
        Want next day delivery guaranteed?
      </h3>
      <p>
        For next day delivery guaranteed, simply upgrade your delivery choice when you place an order.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1 px-10">
        <li>Option 1: Special Delivery (Next Working Day Delivery Guaranteed)</li>
        <li>Option 2: DHL 24 Hour</li>
      </ul>
      <p className="mt-2">
        Prices for different delivery methods are shown in your shopping basket when you place an order.
      </p>
    </div>

    {/* Delivery Companies */}
    <div className="leading-5 tracking-tight">
      <h3 className="font-semibold text-base mb-2">
        Which delivery companies does energylightbulbs.co.uk use?
      </h3>
      <ul className="list-disc list-inside space-y-1 px-8">
        <li>Royal Mail (First or second class post)</li>
        <li>Parcel Force, DHL, Yodel</li>
        <li>Delivery for Off Shore Islands:</li>
        <ul className="px-10 ">
          <li>Highlands</li>
          <li>Channel Islands: Jersey, Guernsey, Alderney, Sark, Herm</li>
          <li>Isle of Wight</li>
          <li>Anglesey</li>
          <li>Skye</li>
          <li>Isle of Man</li>
          <li>Jura</li>
          <li>Tresco, Scilly Isles</li>
          <li>Isle of Rum</li>
        </ul>
        <li className="mt-2">Are charged at £15.99</li>
      </ul>
    </div>

    {/* Payment Methods */}
    <div className="leading-5 tracking-tight">
      <h3 className="font-semibold text-base mb-2">Which payment methods are accepted?</h3>
      <p>
        We accept all major credit or debit card via our fully secure payment gateway provided by Protx (Sage Pay).
        We also accept PayPal and Google Checkout.
      </p>

      <h3 className="font-semibold text-base mt-4 mb-2">Can I pay by cheque?</h3>
      <p>
        Yes, we can also accept cheques which need to be made payable to <b>'Energy Light Bulbs Ltd.'</b>,
        but we will not despatch any items until cleared funds have been received into our bank account.
        Call our friendly, UK-based call centre, on <span className="font-semibold text-black">01895 55 33 00</span> and we will talk you through the process.
      </p>
      <p className="mt-2">Please send cheques to the following address:</p>

      <div className="ml-10 mt-1 leading-5 tracking-tight">
        <p>Energy Light Bulbs Ltd</p>
        <p>T2</p>
        <p>Arundel Road</p>
        <p>Uxbridge</p>
        <p>Middlesex</p>
        <p>UB8 2RP</p>
      </div>

      <p className="mt-2">
        Please ensure that you accompany your mail order with a copy of your sales order number.
      </p>
    </div>

    {/* Purchase Orders & Hours */}
    <div className="leading-5 tracking-tight">
      <h3 className="font-semibold text-base ">
        Do you accept orders for Government, Local Authorities & Schools?
      </h3>
      <p>
        We accept purchase orders from public bodies. Please ensure that you include a contact name,
        telephone number, and also an email address with your order.
      </p>

      <h3 className="font-semibold text-base mt-4 ">Opening Hours</h3>
      <div className="">
        <p>Mon - Fri: 8.30am - 6.00pm</p>
        <p>Sat: 10am - 4pm</p>
        <p>Sun: Closed</p>
      </div>
    </div>
  </div>
</div>
  );
}
