"use client";

import { useRef } from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";
import { Input } from "@/app/components/Input/Input";

export default function EnergyCalculatorPage() {
  const wattRef = useRef<HTMLInputElement>(null);
  const costRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const bulbsRef = useRef<HTMLInputElement>(null);

  const currentCostRef = useRef<HTMLSpanElement>(null);
  const savingCostRef = useRef<HTMLSpanElement>(null);
  const yearlySavingsRef = useRef<HTMLSpanElement>(null);
  const lifetimeSavingsRef = useRef<HTMLSpanElement>(null);
  const wattsLabelRef = useRef<HTMLSpanElement>(null);
  const saverWattRef = useRef<HTMLSpanElement>(null);

  const handleCalculate = () => {
    const watt = parseFloat(wattRef.current?.value || "0");
    const cost = parseFloat(costRef.current?.value || "0");
    const hours = parseFloat(hoursRef.current?.value || "0");
    const bulbs = parseFloat(bulbsRef.current?.value || "0");

    if (!watt || !cost || !hours || !bulbs) return;

    const saverWatt = parseFloat((watt * 0.2).toFixed(1));

    const annualCurrent = ((watt * hours * bulbs * 365) / 1000) * (cost / 100);
    const annualSaving =
      ((saverWatt * hours * bulbs * 365) / 1000) * (cost / 100);
    const yearlySavings = annualCurrent - annualSaving;
    const lifetimeSavings = yearlySavings * (8000 / (hours * 365));

    if (currentCostRef.current)
      currentCostRef.current.textContent = annualCurrent.toFixed(2);
    if (savingCostRef.current)
      savingCostRef.current.textContent = annualSaving.toFixed(2);
    if (yearlySavingsRef.current)
      yearlySavingsRef.current.textContent = yearlySavings.toFixed(2);
    if (lifetimeSavingsRef.current)
      lifetimeSavingsRef.current.textContent = lifetimeSavings.toFixed(2);
    if (wattsLabelRef.current)
      wattsLabelRef.current.textContent = watt.toString();
    if (saverWattRef.current)
      saverWattRef.current.textContent = saverWatt.toString();
  };
  return (
    <main className="w-full mx-auto  md:py-10 px-4 sm:px-6 md:px-18 text-black font-sans min-h-screen">
      {/* Breadcrumb */}
      <div className="md:mb-6">
        <Breadcrumbs />
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-3 md:mb-6 text-text18 uppercase tracking-wide">
        Energy Saving Calculator
      </h1>

      {/* Calculator */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] max-sm:grid-cols-[auto_1fr] gap-x-6 md:gap-x-20 gap-y-4 mb-6 text-sm">
        {/* Wattage */}
        <label htmlFor="watt" className="self-center">
          Wattage of your current bulb(s)
        </label>
        <div className="flex items-center space-x-2">
          <Input
            label={""}
            name={""}
            type="text"
            id="watt"
            ref={wattRef}
            defaultValue="100"
            className={
              "w-16 px-2 py-1 border text-text16 transition-all duration-300"
            }
          />
          <span>Watts</span>
        </div>

        {/* Cost */}
        <label htmlFor="cost" className="self-center">
          I currently pay
        </label>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            id="cost"
            label={""}
            name={""}
            ref={costRef}
            defaultValue="10"
            className="w-16 px-2 py-1 border text-text16 transition-all duration-300 outline-red-600 outline-1"
          />
          <span>pence per unit of electricity*</span>
        </div>

        {/* Hours */}
        <label htmlFor="hours" className="self-center">
          Number of hours per day used
        </label>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            id="hours"
            label={""}
            name={""}
            ref={hoursRef}
            defaultValue="4"
            className={`w-16 px-2 py-1 border text-text16 transition-all duration-300 `}
          />
          <span>hours</span>
        </div>

        {/* Bulbs */}
        <label htmlFor="bulbs" className="self-center">
          I use
        </label>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            id="bulbs"
            ref={bulbsRef}
            label={""}
            name={""}
            defaultValue="2"
            className="w-16 px-2 py-1 border text-text16 transition-all duration-300 "
          />
          <span>bulbs like this</span>
        </div>
      </div>

      {/* Result Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] max-sm:grid-cols-[auto_1fr] gap-x-6 md:gap-x-20 gap-y-4 text-sm">
        <div>
          <span>Annual cost of running</span>
          <br />
          current <span ref={wattsLabelRef}>100</span> <span>W bulbs:</span>
        </div>
        <div className="flex items-center">
          <span ref={currentCostRef} className="font-semibold ml-2">
            £29.20
          </span>
        </div>

        <span className="self-center">Equivalent Energy Saver bulb:</span>
        <div>
          <strong>
            <span ref={saverWattRef} className="mr-1">
              20
            </span>
            <span className="text-black">watts**</span>
          </strong>
        </div>

        <span className="self-start">
          Cost of equivalent Energy Saver bulb:
        </span>
        <div>
          £ <span ref={savingCostRef}>5.84</span>
        </div>

        <span className="self-start font-bold uppercase">Annual Savings:</span>
        <div>
          £{" "}
          <span ref={yearlySavingsRef} className="text-md font-semibold">
            23.36
          </span>
        </div>

        <span className="self-start">
          Total savings made over life
          <br />
          of Energy saving bulb
          <br />
          Based on 8000 hour bulb:
        </span>
        <div className="pt-3">
          £{" "}
          <span ref={lifetimeSavingsRef} className="ml-1">
            128.00
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 flex md:mx-60 justify-start mx-30 ">
        <div className="relative inline-block group md:w-1/4  sm:w-1/3 ">
          <div className="absolute inset-0 rounded-md bg-bg16 border-2 border-border12 group-hover:brightness-110 transition-all duration-300 ease-out z-0 shadow-xl" />

          <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-[#30c5f0] to-[#17a2b8] group-hover:brightness-110 transition-all duration-300 ease-out z-0 shadow-lg" />

          <button className="relative z-20 w-full py-2 text-text1 font-bold rounded-md tracking-normal leading-relaxed transition-all duration-300 ease-out">
            CALCULATOR
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-md text-text18 mt-8">
        Costs and savings calculated based upon typical domestic tariff of 10p
        per unit (kWhr).
        <br />
        Please note that this is an approximate value and that this exact power
        rating may not be available.
      </p>

      {/* Info Text */}
      <div className="mt-4 space-y-4 text-text18 text-md">
        <h2 className="text-2xl font-bold">How Much Could YOU Save?</h2>
        <p>
          Some energy saving bulbs can be more costly than traditional
          incandescent bulbs...
        </p>
        <p>
          Use our energy saving calculator to work out the savings you could
          make...
        </p>
        <p>
          There are current government drives to reduce our carbon emissions...
        </p>
      </div>
    </main>
  );
}
