
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";

import { Input } from "../Input/Input";

export const Footer = () => {
  return (
    <footer className="mt-2  w-full px-18">
      <div className="flex flex-row items-start">
        <div className="w-full">
          <div className="w-full grid items-center  my-6 justify-center  ">
            <div className="grid grid-cols-4 gap-x-10 mb-4  list-none text-text5 font-bold text-xl  text-md">
              <li>LIGHT BULBS</li>
              <li>LIGHTING</li>
              <li>ELECTRONIC GOODS</li>
              <li>SIGN UP OUR NEWSLETTER</li>
            </div>

            <div className="grid grid-cols-4  gap-x-10 text-text8 font-light text-sm    hover:bg-bg8  ">
              <ul className="space-y-2">
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
              <ul className=" space-y-2">
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
                        href="/energy-calculator"
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
                        FIND <PiGreaterThan className="ml-1 w-4 h-4" />
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
                        READ MORE <PiGreaterThan className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ul>

              <div>
                <div className="flex w-full">
                  {/* Input with icon */}
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text14">
                      <MdOutlineForwardToInbox size={20} />
                    </span>

                    <Input
                      type="email"
                      name="search"
                      placeholder="Enter your email address"
                      className="w-full bg-transparent text-text4 py-2 pl-10 pr-3 border-r-0  border border-border4 rounded-l-md placeholder:text-text14 placeholder:font-semibold placeholder:text-xs focus:outline-none"
                      label=""
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button className=" px-1.5 py-2 bg-bg8 text-white text-xs font-bold rounded-r-md hover:bg-bg6 transition-all duration-300">
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
                    <MdOutlineForwardToInbox
                      size={20}
                      className="text-text19"
                    />
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
};
