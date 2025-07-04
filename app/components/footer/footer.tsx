import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";

import { Input } from "../Input/Input";

export const Footer = () => {
  return (
<footer className="mt-4 w-full text-text8">
  <div className="w-full py-8 px-4 sm:px-8 md:px-18">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-x-20">

      {/* Left Section */}
      <div className="hidden md:flex gap-20 text-xs">
        {/* LIGHT BULBS */}
        <div>
          <h2 className="md:text-xl text-sm font-bold text-text5 mb-4">
            LIGHT BULBS
          </h2>
          <ul className="space-y-2 md:mb-4 mb-0">
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
          <h2 className="text-xl font-bold text-text5 mb-4">LIGHTING</h2>
          <ul className="space-y-2">
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

        {/* ELECTRONIC GOODS */}
        <div>
          <h2 className="text-xl font-bold text-text5 mb-4">ELECTRONIC GOODS</h2>
          <ul className="space-y-2  mb-6">
            <li>Electrical Goods</li>
            <li>Lamps and Table Lamps</li>
            <li>Adaptors & Extension Leads</li>
            <li>Photoelectric Smoke Alarm</li>
            <li>Night Lights</li>
            <li>Torches</li>
            <li>Fans And Heaters</li>
          </ul>

          <div className="space-y-4">
            <div className="bg-bg8 p-4 rounded-md">
              <p className="text-base text-text1 font-bold">ENERGY CALCULATOR</p>
              <a
                href="/energy-calculator"
                className="mt-2 inline-flex items-center bg-bg1 px-4 py-2 text-sm font-semibold text-text14 rounded-md"
              >
                VIEW <PiGreaterThan className="ml-2" />
              </a>
            </div>

            <div className="bg-bg11 p-4 rounded-md">
              <p className="text-base text-text1 font-bold">BASE FINDER</p>
              <a
                href="/base-finder"
                className="mt-2 inline-flex items-center bg-bg1 px-4 py-2 text-sm font-semibold text-text14 rounded-md"
              >
                FIND <PiGreaterThan className="ml-2" />
              </a>
            </div>

            <div className="bg-bg7 p-4 rounded-md">
              <p className="text-base text-text1 font-bold">LEDS BUYER GUIDE</p>
              <a
                href="/buyers-guide-led"
                className="mt-2 inline-flex items-center bg-bg1 px-4 py-2 text-sm font-semibold text-text14 rounded-md"
              >
                READ MORE <PiGreaterThan className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER & CONTACT */}
      <div>
        <h2 className="text-xl font-bold text-text5 mb-4">SIGN UP OUR NEWSLETTER</h2>

        {/* Email Input */}
        <div className="w-full">
          <div className="flex mb-4">
            <div className="relative">
              <span className="absolute left-1 top-1/2 -translate-y-1/2 text-text14">
                <MdOutlineForwardToInbox size={20} />
              </span>
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-transparent text-text4 py-2 pl-7 border-r-0 border border-border4 rounded-l-md placeholder:text-text14 placeholder:font-semibold placeholder:text-xs focus:outline-none"
                label=""
              />
            </div>

            <button className="px-2 py-2 bg-bg8 text-white text-xs font-bold rounded-r-md hover:bg-bg6 transition-all duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="text-text5 text-md font-semibold">FIND US</h4>
            <p className="mt-1">
              T2, Arundel Road, Uxbridge, Middlesex, UB8 2RP, United Kingdom.
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

        {/* Opening Hours */}
        <div className="mt-4 text-sm">
          <h4 className="text-text5 font-semibold text-lg">OPENING HOURS</h4>
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
