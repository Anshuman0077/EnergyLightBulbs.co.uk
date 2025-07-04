import React from "react";

export const ListView = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
        <div className="flex flex-col space-y-6">
          {/* Product Item 1 */}
          <div className="flex flex-wrap items-start pb-20 border border-gray-200 hover:border-orange-500 rounded-md shadow-sm gap-4 p-4 transition-all duration-300 ease-in-out">
            {/* Product Image */}
            <div className="w-[90px] sm:w-[110px] md:w-[130px] flex-shrink-0">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                alt="GU10 Halogen Bulb Remover"
                className="w-full h-24 sm:h-28 object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col min-w-0 flex-1 space-y-2">
              <span className="text-text18 text-sm sm:text-base font-semibold leading-snug">
                GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
              </span>

              <div className="flex flex-wrap text-orange-400 space-x-2">
                <span className="text-sm">★★★★★</span>
                <span className="text-gray-500 text-sm">1 Review</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col justify-between w-full xs:w-auto sm:w-[120px] items-end mt-2 sm:mt-0 ml-auto text-sm text-right">
              <span className="text-text6 font-bold">
                £2.99{" "}
                <span className="text-gray-400 font-normal">(Incl. Vat)</span>
              </span>
              <button className="bg-bg6 hover:bg-green-700 transition-colors px-4 py-1 text-white rounded text-xs whitespace-nowrap mt-2">
                Add to basket
              </button>
            </div>
          </div>

          {/* Product Item 2 */}
          <div className="flex flex-wrap items-start pb-20 border border-gray-200 hover:border-orange-500 rounded-md shadow-sm gap-4 p-4 transition-all duration-300 ease-in-out">
            {/* Product Image */}
            <div className="w-[90px] sm:w-[110px] md:w-[130px] flex-shrink-0">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                alt="GU10 Halogen Bulb Remover"
                className="w-full h-24 sm:h-28 object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col min-w-0 flex-1 space-y-2">
              <span className="text-text18 text-sm sm:text-base font-semibold leading-snug">
                GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
              </span>

              {/* <div className="flex flex-wrap text-orange-400 space-x-2">
                <span className="text-sm">★★★★★</span>
                <span className="text-gray-500 text-sm">1 Review</span>
              </div> */}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col justify-between w-full xs:w-auto sm:w-[120px] items-end mt-2 sm:mt-0 ml-auto text-sm text-right">
              <span className="text-text6 font-bold">
                £2.99{" "}
                <span className="text-gray-400 font-normal">(Incl. Vat)</span>
              </span>
              {/* <button className="bg-bg6 hover:bg-green-700 transition-colors px-4 py-1 text-white rounded text-xs whitespace-nowrap mt-2">
                Add to basket
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
