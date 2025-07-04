import React from "react";

export const Offers = () => {
  return (
<div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
  {/* Top Section: Welcome + Image */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
    {/* Welcome Text */}
    <div className="bg-white border border-gray-200 min-h-[200px] rounded p-6 flex flex-col  shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold text-sky-600 mb-4 leading-tight">
        WELCOME TO ENERGY LIGHT BULBS,<br />
        YOUR ONE STOP SHOP FOR ALL YOUR LOW ENERGY BULBS.
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        In today's society the responsibility to help prevent climate change is on every individual.
        Everyone should play their part to try and prevent the pace in which the effects are taking place.
      </p>
    </div>

    {/* Image Block */}
    <div className="w-full min-h-[200px] max-h-[400px] flex justify-end  items-end h-full">
      <img
        src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/image_Bill.png"
        alt="Special Offer"
        className="w-full h-full object-center"
      />
    </div>
  </div>

  {/* Footer Links Section */}

</div>





  );
};
