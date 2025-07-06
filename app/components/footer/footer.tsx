import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";

import { Input } from "../Input/Input";

export const Footer = () => {
  return (
    <footer className="mt-4 w-full text-text8">
      <div className="w-full max-w-7xl px-6 mx-auto  py-8">
        <div className="mx-auto w-full   flex flex-col md:flex-row md:justify-between gap-10">
          {/* LEFT SIDE COLUMNS */}
          <div className="flex-1 hidden  md:grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* LIGHT BULBS */}
            <div>
              <h2 className="text-base md:text-lg font-bold text-text5 mb-4">
                LIGHT BULBS
              </h2>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>Energy Saving</li>
                <li>Compact Fluorescent</li>
                <li>Halogen Bulbs</li>
                <li>LEDs</li>
                <li>R7s Halogen Linear J118/J78</li>
                <li>Appliance Bulbs</li>
                <li>Sodium Lamps</li>
                <li>Metal Halide Lamps</li>
                <li>Energy Saving Halogens</li>
                <li>Low Voltage Bulbs</li>
                <li>Incandescent Decoration Light Bulbs</li>
              </ul>
            </div>

            {/* LIGHTING */}
            <div>
              <h2 className="text-base md:text-lg font-bold text-text5 mb-4">
                LIGHTING
              </h2>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>Fire Rated Down Lights</li>
                <li>Ceiling Down Lights</li>
                <li>Bathroom Lighting</li>
                <li>Cabinet / Undershelf Lighting</li>
                <li>Transformers / LED Drivers</li>
                <li>Switches & Sockets</li>
                <li>Socket Converters & Adaptors</li>
                <li>LED Panels</li>
                <li>Indoor Wall lights</li>
                <li>Decoration string lights</li>
                <li>Christmas Decorations</li>
                <li>Emergency Lights</li>
                <li>Commercial Lights</li>
                <li>Sensor Lights & PIRs</li>
              </ul>
            </div>

            {/* ELECTRONIC GOODS + TOOLS */}
            <div>
              <h2 className="text-base md:text-lg font-bold text-text5 mb-4">
                ELECTRONIC GOODS
              </h2>
              <ul className="space-y-2 text-xs md:text-sm mb-6">
                <li>Electrical Goods</li>
                <li>Lamps and Table Lamps</li>
                <li>Adaptors & Extension Leads</li>
                <li>Photoelectric Smoke Alarm</li>
                <li>Night Lights</li>
                <li>Torches</li>
                <li>Fans And Heaters</li>
              </ul>

              <div className="space-y-4  w-full  md:w-[14em]  text-xs font-semibold text-text14">
                <div className="bg-bg8 p-4 rounded ">
                  <p className="text-base text-text1 font-bold">
                    ENERGY CALCULATOR
                  </p>
                  <a
                    href="/energy-calculator"
                    className="mt-2 inline-flex items-center bg-bg1 px-4 py-2  rounded-md"
                  >
                    VIEW <PiGreaterThan className="ml-2" />
                  </a>
                </div>

                <div className="bg-bg11 p-4 rounded">
                  <p className="text-base text-text1 font-bold">BASE FINDER</p>
                  <a
                    href="/base-finder"
                    className="mt-2 inline-flex items-center bg-bg1 px-4 py-2  rounded"
                  >
                    FIND <PiGreaterThan className="ml-2" />
                  </a>
                </div>

                <div className="bg-bg7 p-4 rounded">
                  <p className="text-base text-text1 font-bold">
                    LEDS BUYER GUIDE
                  </p>
                  <a
                    href="/buyers-guide-led"
                    className="mt-2 inline-flex items-center bg-bg1 px-4 py-2   rounded"
                  >
                    READ MORE <PiGreaterThan className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: NEWSLETTER + CONTACT */}
          <div className="w-full md:w-[320px]">
            <h2 className="text-xl font-bold text-text5 mb-4">
              SIGN UP OUR NEWSLETTER
            </h2>
            <div className="flex  w-full mb-4">
              <div className="relative flex-1">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-text14">
                  <MdOutlineForwardToInbox size={20} />
                </span>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-bg1 pl-8 py-2 border border-border4 text-text4 text-xs font-semibold placeholder:text-text14 rounded-l-md"
                  label=""
                />
              </div>
              <button className="px-4 py-2 bg-bg8 text-white text-xs font-bold rounded-r-md hover:bg-bg6 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <h4 className="text-text5 text-md font-semibold">FIND US</h4>
                <p className="mt-1">
                  T2, Arundel Road, Uxbridge, Middlesex, UB8 2RP, United
                  Kingdom.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone size={16} className="text-text19" />
                <p>01895 55 33 00</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdOutlineForwardToInbox size={20} className="text-text19" />
                <p>orders@energylightbulbs.co.uk</p>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <h4 className="text-text5 font-semibold text-lg">
                OPENING HOURS
              </h4>
              <p className="mt-1">Mon - Fri: 9.30am - 5.00pm</p>
              <p>Sat: 10am - 4pm</p>
              <p>Sun: Closed</p>
              <button className="mt-3 bg-bg8 hover:bg-bg6 text-white px-4 py-2 rounded-md font-bold">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
