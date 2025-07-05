import React from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

export default function DeliveryPage() {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 md:px-10 md:mt-6 text-text18 text-sm min-h-screen">
      {/* Breadcrumb */}
      <div className="md:mb-5">
        <Breadcrumbs />
      </div>

      {/* Page Title */}
      <h1 className="md:mb-10 mb-2 md:text-2xl text-3xl font-semibold text-black">Delivery</h1>

      <div className="md:space-y-10 space-y-5 leading-6 tracking-tight">
        {/* Free Delivery Section */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            Free Delivery for all orders with no minimum order value!
          </h3>
          <p>
            Delivery in the United Kingdom is FREE for all orders with no minimum order value.
          </p>
          <p>
            All orders received before 4pm will be despatched the same day. Free delivery takes 5–6 days.
          </p>
        </div>

        {/* Next Day Delivery */}
        <div>
          <h3 className="text-base font-semibold mb-2">Want next day delivery guaranteed?</h3>
          <p>
            For next day delivery guaranteed, simply upgrade your delivery choice when placing an order.
          </p>
          <ul className="list-disc mt-3 pl-4 sm:pl-6 space-y-1">
            <li>Option 1: Special Delivery 
              (Next Working Day Delivery Guaranteed)</li>
            <li>Option 2: DHL 24 Hour</li>
          </ul>
          <p className="mt-2">
            Prices for different delivery methods are shown in your shopping basket when placing an order.
          </p>
        </div>

        {/* Delivery Companies */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            Which delivery companies does energylightbulbs.co.uk use?
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-4 sm:pl-6">
            <li>Royal Mail (First or Second Class Post)</li>
            <li>Parcel Force, DHL, Yodel</li>
            <li>Delivery for Off Shore Islands:</li>
            <ul className="list-disc pl-6 sm:pl-10 mt-2 space-y-1">
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
            <li className="mt-2">These are charged at £15.99</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-base font-semibold mb-2">Which payment methods are accepted?</h3>
          <p>
            We accept all major credit or debit cards via our secure payment gateway provided by Protx (Sage Pay).
            We also accept PayPal and Google Checkout.
          </p>

          <h3 className="text-base font-semibold mt-4 mb-2">Can I pay by cheque?</h3>
          <p>
            Yes, we can accept cheques payable to <b>'Energy Light Bulbs Ltd.'</b>. However, items will not be dispatched until cleared funds have been received.
            Call our friendly UK-based call centre at <span className="font-semibold text-black">01895 55 33 00</span> and we’ll guide you through the process.
          </p>
          <p className="mt-2">Please send cheques to the following address:</p>

          <div className="ml-4 mt-2">
            <p>Energy Light Bulbs Ltd</p>
            <p>T2</p>
            <p>Arundel Road</p>
            <p>Uxbridge</p>
            <p>Middlesex</p>
            <p>UB8 2RP</p>
          </div>

          <p className="mt-2">
            Be sure to include a copy of your sales order number with your mail order.
          </p>
        </div>

        {/* Purchase Orders & Hours */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            Do you accept orders for Government, Local Authorities & Schools?
          </h3>
          <p>
            Yes, we accept purchase orders from public bodies. Please include a contact name, phone number, and email address with your order.
          </p>

          <h3 className="text-base font-semibold mt-4 mb-2">Opening Hours</h3>
          <div>
            <p>Mon – Fri: 8.30am – 6.00pm</p>
            <p>Sat: 10.00am – 4.00pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
