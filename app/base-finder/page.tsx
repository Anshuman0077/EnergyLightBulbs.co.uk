import React from "react";

export default function baseFinderPage() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 py-10 bg-bg1 text-text18">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Lamp Base Finder</h1>

        <p className="leading-7 tracking-tight">
          The bottom part of the bulb or lamp that connects into the light fitting is generally known as the ‘cap’ or ‘base’. There are a vast variety of caps and bases, so our "Base Finder" page has been created to help ensure that you choose the correct type of lamp.
        </p>

        <p className="leading-7 tracking-tight">
          The familiar ‘bayonet cap’ base, also known as BC or B22, is used on most regular light bulbs. It has a 22mm diameter with two locating lugs.
        </p>

        <p className="leading-7 tracking-tight">
          The ‘small bayonet cap’, also known as SBC or B15, is similar but measures only 15mm across. It is generally used for mains voltage lamps, and the SBC fitting can also be found in a few specialist low-voltage halogen lamps.
        </p>

        <p className="leading-7 tracking-tight">
          The Edison Screw or ‘ES’ lamp fitting is used universally. The most popular ES or E27 fitting is 27mm in diameter and widely used in both the US and Europe. For smaller fittings, the SES (Small Edison Screw) is common in the UK and Europe.
        </p>

        <p className="leading-7 tracking-tight">
          Miniature halogen/LED capsule lamps are generally designated by the measurement in millimeters between the pins (e.g., the G9 has pins 9mm apart). The G4 is used in low-voltage appliances, while the G9 is for 240v mains use.
        </p>

        <p className="leading-7 tracking-tight">
          The most commonly used halogen spots are either the "push fit" GU4 and GU5.3 low-voltage types, or the "twist and lock" GU10 and GZ10 mains versions. Compact fluorescent/LED lamps (CFLs) without integrated control gear typically use "push-fit" square or rectangular fittings. Those with integral starters use 2-pin fittings, while those for electronic control gear and dimmers use 4-pin connectors.
        </p>
      </div>
    </section>
  );
}
