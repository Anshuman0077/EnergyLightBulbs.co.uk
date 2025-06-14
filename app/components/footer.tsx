"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";
import { useState } from "react";
import footorData from "@/app/data/footorData.json"

export const Footer = () => {
  const [focued, setfocused] = useState(false);
  return (
    <footer className="mt-2  w-full px-10">
      <div className="flex flex-row items-start">
        <div className="w-full">
          <div className="w-full grid items-center  my-6 justify-center  ">
            <div className="grid grid-cols-4 gap-x-10 mb-4  list-none text-text5 font-bold text-xl px-12 text-md">
              <li>LIGHT BULBS</li>
              <li>LIGHTING</li>
              <li>ELECTRONIC GOODS</li>
              <li>SIGN UP OUR NEWSLETTER</li>
            </div>

            <div className="grid grid-cols-4  gap-x-10 text-text8 font-light text-sm  px-12  hover:bg-bg8  ">
              <ul className="space-y-2">
                <li>Energy Saving</li>
                <li  >Compact Fluorescent</li>
                <li >Halogen Bulbs</li>
                <li>LEDs</li>
                <li >R7s Halogen Linear J118/J78</li>
                <li >Appliance Bulbs</li>
                <li >Sodium Lamps</li>
                <li >Metal Halide Lamps</li>
                <li >Energy Saving Halogens</li>
                <li >Low Voltage Bulbs</li>
                <li>Incandescent Decoration Light Bulbs</li>
              </ul>
              <ul className=" space-y-2">
                <li>Fire Rated Down Lights</li>
                <li>Ceiling Down Lights</li>
                <li >Bathroom Lighting</li>
                <li>Cabinet / Undershelf Lighting</li>
                <li >Transformers / LED Drivers</li>
                <li>Switches & Sockets</li>
                <li>Socket Converters & Adaptors</li>
                <li >LED Panels</li>
                <li >Indoor Wall lights</li>
                <li >Decoration string lights</li>
                <li>Christmas Decorations</li>
                <li>Emergency Lights</li>
                <li>Commercial Lights</li>
                <li>Sensor Lights & PIRs</li>
              </ul>
              <ul className=" space-y-2  ">
                <li>Electrical Goods</li>
                <li>Lamps and Table Lamps</li>
                <li>Adaptors & Extension Leads</li>
                <li>Photoelectric Smoke Alarm</li>
                <li>Night Lights</li>
                <li>Torches</li>
                <li>Fans And Heaters</li>
                <div className="space-y-3 w-full">
                  <div className="space-y-3  w-44">
                    <div className="bg-bg8 px-4 py-4  rounded-md border-none">
                      <p className="text-lg text-text1 font-bold tracking-tight leading-5">
                        ENERGY CALCULATOR
                      </p>
                      <a
                        href="/energy-calulator"
                        className="flex items-center bg-bg1  px-4 py-2 mt-4 rounded-md text-text14 font-semibold w-max"
                      >
                        VIEW <PiGreaterThan className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                    <div className="bg-bg11 p-5 rounded-md border-none">
                      <p className="text-lg font-bold  text-text1 ">
                        BASE FINDER
                      </p>
                      <a
                        href="/base-finder"
                        className="flex items-center bg-bg1  px-4 py-2 mt-4 rounded-md text-text14 font-semibold w-max"
                      >
                        VIEW <PiGreaterThan className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                    <div className="bg-bg7 p-5 rounded-md border-none">
                      <p className="text-lg font-bold  text-text1 tracking-tight leading-6">
                        LEDS BUYER GUIDE
                      </p>
                      <a
                        href="/buyers-guide-led"
                        className="flex items-center bg-bg1  px-4 py-2 mt-4 rounded-md text-text14 font-semibold w-max"
                      >
                        VIEW <PiGreaterThan className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ul>

              <div>
                <div className="flex">
                  <div
                    className={`bg-bg1 flex items-center w-full max-w-lg rounded-tl-md rounded-bl-md  border transition-all duration-300 ${
                      focued
                        ? "border border-border9 shadow-lg shadow-blue-custom"
                        : "border border-transparent"
                    }`}
                  >
                    <div className="rounded-tl-md  px-2">
                      <MdOutlineForwardToInbox size={20} />
                    </div>
                    <input
                      type="text"
                      name="search"
                      placeholder="Enter your email address"
                      className="text-text4 bg-transparent focus:outline-none w-full py-2  placeholder:text-text14 placeholder:font-semibold placeholder:text-sm transition-all duration-300"
                      onFocus={() => setfocused(true)}
                      onBlur={() => setfocused(false)}
                    />
                  </div>
                  <button className="bg-bg8 py-2 px-2 rounded-tr-md text-text1 rounded-br-md font-bold text-sm hover:bg-bg6 transition-colors duration-300">
                    SUBSCRIBE
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="mt-4 text-md">
                    <h4 className="text-text5 text-xl font-light">FIND US</h4>
                    <p className="mt-2">
                      T2, Arundel Road,Uxbridge,Middlesex, UB8 2RP, United
                      Kingdom.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm light">
                    <FaPhone size={16} className="text-text19" />
                    <p>01895 55 33 00</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <MdOutlineForwardToInbox size={20} className="text-text19" />
                    <p>orders@energylightbulbs.co.uk</p>
                  </div>
                </div>
                <div className="">
                  <div className="mt-4 text-md">
                    <h4 className="text-text5 text-lg font-bold font-roboto">
                      OPENING HOURS
                    </h4>
                    <div className="mt-2 text-text19">
                      <p className="mb-1">Mon - Fri: 9.30am - 5.00pm</p>
                      <p className="mb-1">Sat: 10am - 4pm</p>
                      <p className="mb-1">Sat: 10am - 4pm</p>
                      <button className="mt-2 text-text13 border py-2 px-3 rounded-md border-none bg-bg8 hover:bg-bg6 font-bold">
                        CONTACT US
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  // return (
  //   <div className="footer border-t-5  mt-2 w-full bg-bg3">
  //     <div className="flex flex-col lg:flex-row items-start px-4 sm:px-8 py-6 ">
  //       <div className="w-full">
  //         <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 text-text5 font-semibold text-lg">
  //           <li>LIGHT BULBS</li>
  //           <li>LIGHTING</li>
  //           <li>ELECTRONIC GOODS</li>
  //           <li>SIGN UP OUR NEWSLETTER</li>
  //         </ul>

  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 mt-4 text-sm font-semibold text-text8">
  //           <ul className="space-y-1">
  //             <li>Energy Saving</li>
  //             <li>Compact Fluorescent</li>
  //             <li>Halogen Bulbs</li>
  //             <li>LEDs</li>
  //             <li>R7s Halogen Linear J118/J78</li>
  //             <li>Appliance Bulbs</li>
  //             <li>Sodium Lamps</li>
  //             <li>Metal Halide Lamps</li>
  //             <li>Energy Saving Halogens</li>
  //             <li>Low Voltage Bulbs</li>
  //             <li>Incandescent Decoration Light Bulbs</li>
  //           </ul>

  //           <ul className="space-y-2">
  //             <li>Fire Rated Down Lights</li>
  //             <li>Ceiling Down Lights</li>
  //             <li>Bathroom Lighting</li>
  //             <li>Cabinet / Undershelf Lighting</li>
  //             <li>Transformers / LED Drivers</li>
  //             <li>Switches & Sockets</li>
  //             <li>Socket Converters & Adaptors</li>
  //             <li>LED Panels</li>
  //             <li>Indoor Wall lights</li>
  //             <li>Decoration string lights</li>
  //             <li>Christmas Decorations</li>
  //             <li>Emergency Lights</li>
  //             <li>Commercial Lights</li>
  //             <li>Sensor Lights & PIRs</li>
  //           </ul>

  //           <div className="space-y-3">
  //             <ul className="space-y-1">
  //               <li>Electrical Goods</li>
  //               <li>Lamps and Table Lamps</li>
  //               <li>Adaptors & Extension Leads</li>
  //               <li>Photoelectric Smoke Alarm</li>
  //               <li>Night Lights</li>
  //               <li>Torches</li>
  //               <li>Fans And Heaters</li>
  //             </ul>

  //             <div className="space-y-3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
  //               <div className="bg-bg8 p-4 rounded-md">
  //                 <p className="text-lg font-bold text-text1 tracking-tighter leading-5">
  //                   ENERGY CALCULATOR
  //                 </p>
  //                 <a
  //                   href="/energy-calulator"
  //                   className="flex items-center bg-bg1 px-4 py-2 mt-2 rounded-md text-text14 font-semibold w-max"
  //                 >
  //                   VIEW <PiGreaterThan className="ml-2 w-4 h-4" />
  //                 </a>
  //               </div>

  //               <div className="bg-bg11 p-4 rounded-md">
  //                 <p className="text-lg font-bold text-text1">BASE FINDER</p>
  //                 <a
  //                   href="/base-finder"
  //                   className="flex items-center bg-bg1 px-4 py-2 mt-2 rounded-md text-text14 font-semibold w-max"
  //                 >
  //                   VIEW <PiGreaterThan className="ml-2 w-4 h-4" />
  //                 </a>
  //               </div>

  //               <div className="bg-bg7 p-4 rounded-md">
  //                 <p className="text-md font-bold text-text1">
  //                   LEDS BUYER GUIDE
  //                 </p>
  //                 <a
  //                   href="/buyers-guide-led"
  //                   className="flex items-center bg-bg1 px-4 py-2 mt-2 rounded-md text-text14 font-semibold w-max"
  //                 >
  //                   VIEW <PiGreaterThan className="ml-2 w-4 h-4" />
  //                 </a>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="space-y-6">
  //             <div className="w-full max-w-md  flex items-center    bg-bg1 rounded-md overflow-hidden ">
  //               <div className="px-3 py-2">
  //                 <MdOutlineForwardToInbox className="w-4 h-4 text-text14" />
  //               </div>
  //               <input
  //                 type="text"
  //                 placeholder="Enter your email address"
  //                 className="flex-1 bg-bg1 text-text14 text-sm  py-2 focus:outline-none "
  //               />
  //               <button className="bg-bg8 px-5 py-2.5 text-text1 text-sm  font-semibold hover:bg-bg6">
  //                 SUBSCRIBE
  //               </button>
  //             </div>

  //             <div className="space-y-2">
  //               <h4 className="text-lg font-semibold text-text5">FIND US</h4>
  //               <p className="text-sm">
  //                 T2, Arundel Road, Uxbridge, MiddleSex, UB8 2RP, United Kingdom
  //               </p>
  //               <div className="flex items-center space-x-2 text-sm">
  //                 <FaPhone />
  //                 <p>01895 55 33 00</p>
  //               </div>
  //               <div className="flex items-center space-x-2 text-sm">
  //                 <MdOutlineForwardToInbox size={20} />
  //                 <p>orders@energylightbulbs.co.uk</p>
  //               </div>
  //             </div>

  //             <div className="space-y-2">
  //               <h4 className="text-lg font-semibold text-text5">
  //                 OPENING HOURS
  //               </h4>
  //               <div className="text-text19 font-light">
  //                 <p className="text-sm">Mon - Fri: 9.30am - 5.00pm</p>
  //                 <p className="text-sm">Sat: 10am - 4pm</p>
  //                 <p className="text-sm">Sun: Closed</p>
  //               </div>

  //               <button className="mt-2 px-4 py-2 bg-bg8 text-text12 font-bold rounded-md hover:bg-bg6">
  //                 CONTACT US
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="w-full bg-bg1 py-6 text-text7 text-sm">
  //       <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 space-y-4 md:space-y-0">
  //         <div className="flex flex-wrap justify-center gap-3">
  //           <a href="/about-us">About Us</a>
  //           <span>|</span>
  //           <a href="/delivery">Delivery</a>
  //           <span>|</span>
  //           <a href="/testimonials">Testimonials</a>
  //           <span>|</span>
  //           <a href="/privacy">Privacy</a>
  //           <span>|</span>
  //           <a href="/security">Security</a>
  //           <span>|</span>
  //           <a href="/terms">Terms</a>
  //           <span>|</span>
  //           <a href="/return-policy">Return Policy</a>
  //         </div>

  //         <div className="flex flex-wrap justify-center gap-3">
  //           <a href="/login">Login</a>
  //           <span>|</span>
  //           <a href="/sign-up">Sign Up</a>
  //           <span>|</span>
  //           <a href="/my-orders-status">My Orders Status</a>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-10 text-text7 text-sm">
  //       <p>Copyright © 2025 Energy Light Bulbs Ltd.</p>
  //       <img
  //         src="https://doo9vxlv0gkqf.cloudfront.net/media/checkout_payment.png"
  //         alt="Payment Options"
  //         className="mt-2 md:mt-0 w-60 "
  //       />
  //     </div>
  //   </div>
  // );
};
