import React from "react";

export const ListView = () => {
  return (
    <section className=" w-full flex items-center justify-center ">
      <div className="w-full  max-w-screen-xl mx-auto  py-8">
        <div className="flex flex-col space-y-6 ">
          {/* Product Item */}
          <div className="flex flex-col   md:flex-row items-start border-2 border-gray-200 hover:border-orange-500 overflow-hidden transition-colors duration-300 ease-int p-4 rounded-sm shadow-sm gap-4">
            {/* Product Image */}
            <div className="flex-shrink-0 h-full ">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                alt="GU10 Halogen"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow space-y-2">
              <span className="text-text18 text-lg font-semibold">
                GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
                Bulb Remover
              </span>

              <div className="flex items-center text-orange-400 space-x-2">
                <span className="">★★★★★</span>
                <span className="text-gray-500 text-sm">1 Review</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col items-end justify-between gap-2 text-sm text-right">
              <span className="text-text6 font-bold">£2.99 (Incl. Vat)</span>
              <button className="bg-green-500 px-4 py-1 text-white rounded text-xs">
                Add to basket
              </button>
            </div>
          </div>
          <div className="flex flex-col   md:flex-row items-start border-2 border-gray-200 hover:border-orange-500 overflow-hidden transition-colors duration-300 ease-int p-4 rounded-sm shadow-sm gap-4  ">
            {/* Product Image */}
            <div className="flex-shrink-0 h-full ">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                alt="GU10 Halogen"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow space-y-2">
              <span className="text-text18 text-lg font-semibold">
                GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
                Bulb Remover
              </span>
              {/* 
              <div className="flex items-center text-orange-400 space-x-2">
                <span>★★★★★</span>
                <span className="text-gray-500 text-sm">1 Review</span>
              </div> */}
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col items-end justify-between gap-2 text-sm text-right">
              <span className="text-text6 font-bold">£2.99 (Incl. Vat)</span>
              {/* <button className="bg-green-500 px-4 py-1 text-white rounded text-xs">
                Add to cart
              </button> */}
            </div>
          </div>

          {/* You can repeat the above block for multiple products */}
        </div>
      </div>
    </section>
  );
};
