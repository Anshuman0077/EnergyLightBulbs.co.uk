"use client";

import { useRef, useState } from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

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
  const [focused, setFocused] = useState({
    watt: false,
    cost: false,
    hours: false,
    bulbs: false,
  });

  return (
    <main className="w-full mx-auto py-10 px-6 text-black font-sans min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs />

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 uppercase tracking-wide">
        Energy Saving Calculator
      </h1>

      {/* Calculator */}
      <div className="grid grid-cols-[auto_1fr] gap-x-40 gap-y-3 mb-6 text-sm">
        <label htmlFor="watt" className="self-center">
          Wattage of your current bulb(s)
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="watt"
            ref={wattRef}
            defaultValue="100"
            onFocus={() => setFocused((prev) => ({ ...prev, watt: true }))}
            onBlur={() => setFocused((prev) => ({ ...prev, watt: false }))}
            className={`w-12 px-2 py-1 border text-text16 delay-50 transition-all duration-300 ${
              focused.watt
                ? "border-none shadow-lg shadow-blue-custom ring-4 ring-blue-500 outline-red-500 outline-1"
                : "border-border6"
            }`}
          />
          <span>Watts</span>
        </div>

        <label htmlFor="cost" className="self-center">
          I currently pay
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="cost"
            ref={costRef}
            defaultValue="10"
            onFocus={() => setFocused((prev) => ({ ...prev, cost: true }))}
            onBlur={() => setFocused((prev) => ({ ...prev, cost: false }))}
            className={`w-12 px-2 py-1 border text-text16 delay-50 transition-all duration-300 ${
              focused.cost
                ? "border-none shadow-lg shadow-blue-custom ring-4 ring-blue-500 outline-red-500 outline-1"
                : "border-border6"
            }`}
          />
          <span>pence per unit of electricity*</span>
        </div>

        <label htmlFor="hours" className="self-center">
          Number of hours per day used
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="hours"
            ref={hoursRef}
            defaultValue="4"
            onFocus={() => setFocused((prev) => ({ ...prev, hours: true }))}
            onBlur={() => setFocused((prev) => ({ ...prev, hours: false }))}
            className={`w-12 px-2 py-1 border text-text16 delay-50 transition-all duration-300 ${
              focused.hours
                ? "border-none shadow-lg shadow-blue-custom ring-4 ring-blue-500 outline-red-500 outline-1"
                : "border-border6"
            }`}
          />
          <span>hours</span>
        </div>

        <label htmlFor="bulbs" className="self-center">
          I use
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="bulbs"
            ref={bulbsRef}
            defaultValue="2"
            onFocus={() => setFocused((prev) => ({ ...prev, bulbs: true }))}
            onBlur={() => setFocused((prev) => ({ ...prev, bulbs: false }))}
            className={`w-12 px-2 py-1 border text-text16 delay-50 transition-all duration-300 ${
              focused.bulbs
                ? "border-none shadow-lg shadow-blue-custom ring-4 ring-blue-500 outline-red-500 outline-1"
                : "border-border6"
            }`}
          />
          <span>bulbs like this</span>
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-30 gap-y-3 text-sm">
        {/* Annual Cost */}
        <div className="">
          <span className="">Annual cost of running</span>
          <br />
          current
          <span ref={wattsLabelRef} className=" ">
            100
          </span>
          <span> W bulbs:</span>
        </div>

        <div className="flex items-center ">
          <div>
            <span ref={currentCostRef} className="ml-2 font-semibold ">
              £29.20
            </span>
          </div>
        </div>

        {/* Equivalent Energy Saver Bulb */}
        <span className="self-center">Equivalent Energy Saver bulb:</span>
        <div>
          <strong>
            <span ref={saverWattRef} className="mr-1">
              20
            </span>
            <span className="text-black">watts**</span>
          </strong>
        </div>

        {/* Cost of Energy Saver Bulb */}
        <span className="self-start">
          Cost of equivalent Energy Saver bulb:
        </span>
        <div>
          £ <span ref={savingCostRef}>5.84</span>
        </div>

        {/* Annual Savings */}
        <span className="self-start font-bold uppercase">Annual Savings:</span>
        <div className="">
          £{" "}
          <span ref={yearlySavingsRef} className="text-md  font-semibold">
            23.36
          </span>
        </div>

        {/* Lifetime Savings */}
        <span className="self-start ">
          Total savings made over life
          <br />
          of Energy saving bulb
          <br />
          Based on 8000 hour bulb:
        </span>
        <div className="pt-3">
          £
          <span ref={lifetimeSavingsRef} className="ml-1 ">
            128.00
          </span>
        </div>
      </div>

      <div className="mt-6 content-center flex w-1/2 mx-26 items-center justify-around">
        <button
          type="button"
          onClick={handleCalculate}
          className="bg-bg16 hover:bg-bg17 text-white py-2 px-6 rounded transition-all shadow-lg  border-border12 border-1 hover:opacity-90 box-shadow-lg hover:shadow-xl  text-text1 font-medium cursor-pointer"
        >
          Calculate Savings
        </button>
      </div>

      <p className="text-md text-text18 mt-8">
        Costs and savings calculated based upon typical domestic tariff of 10p
        per unit (kWhr).
        <br />
        Please note that this is an approximate value and that this exact power
        rating may not be available.
      </p>
      <div className="mt-4 space-y-4 text-text18 text-md">
        <h2 className="text-2xl text-text18 font-bold">
          How Much Could YOU Save?
        </h2>
        <p>
          Some energy saving bulbs can be more costly than traditional
          incandescent bulbs, energy saving variants use revolutionary
          manufacturing methods to cut your electricity consumption and save you
          money. Energy saving light bulbs typically save around 80% more
          electricity than incandescent bulbs.
        </p>
        <p>
          Use our energy saving calculator to work out the savings you could
          make over the life of the bulbs by replacing normal incandescent bulbs
          with energy saving equivalent bulbs.We have filled in average figures
          for you just in case you're not sure about your energy price.
        </p>
        <p>
          There are current government drives to reduce our carbon emissions and
          we all have a responsibility to try and look after the environment.
        </p>
      </div>
    </main>
  );
}
