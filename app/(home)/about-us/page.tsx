import React from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

export default function AboutUsPage() {
  return (
    <div className="text-2xl md:mt-5 font-semibold px-6 sm:px-6 md:px-10 lg:px-18 ">
      <Breadcrumbs />

      <div className="w-full md:pt-4 bg-bg1 text-text18">
        <h3 className="md:my-4 text-text18 text-3xl font-medium">About Us Page</h3>

        <div className=" w-full flex flex-col">
          {/*  Image Section */}
          
          <div className="flex flex-row  w-full md:pt-8  items-start justify-start h-[120px] sm:h-[150px] md:h-[200px]">
            {/* Image 1 */}
            <div className="w-full flex justify-center  h-full">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/free_delivery.jpg"
                alt="Free Delivery"
                className="h-full w-full md:object-cover object-contain "
              />
            </div>

            {/* Image 2 + Text */}
            <div className="w-full md:w-1/2 hidden md:flex flex-col items-center text-center h-full">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/fast_track.jpg"
                alt="Fast Track"
                className="h-full w-auto object-contain"
              />
              <span className="mt-2 text-sm font-medium text-gray-700">
                AWARD WINNING COMPANY
              </span>
            </div>
          </div>

          {/*  About Text Section */}
          <div className="flex flex-col md:mb-8 mb-4 text-sm font-medium text-text18">
            <div className="md:mt-10  max-w-5xl md:space-6 space-3">
              <p className="leading-7 tracking-tight">
                Energy Light Bulbs are one of the UK’s leading suppliers with
                huge stock volumes at our 38,000 sq feet warehouse.
              </p>

              <a
                href="https://www.youtube.com/watch?v=tqd6UwMh9tA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words"
              >
                https://www.youtube.com/watch?v=tqd6UwMh9tA
              </a>

              <p className="mt-6">
                We stock a massive range of Low energy bulbs, Energy saving
                bulbs, LEDs, Halogen bulbs, Fluorescent tubes, Lamp Shades &
                Pendants, Commercial Lighting, Outdoor Garden lighting, Switches
                & sockets.
              </p>

              <p>
                We have a growing reputation with our customers for providing
                high quality, energy saving products at the lowest prices online
                in the United Kingdom.
              </p>

              <p>
                Not only are we the cheapest energy saving light bulb specialist
                online, we also offer free delivery on all orders, with no
                minimum order value required.
              </p>
            </div>
          </div>

          <div className="flex md:hidden my-6 flex-col justify-center items-center md:h-[200px] text-center">
            <img
              src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/fast_track.jpg"
              alt="Fast Track"
              className="h-[200px] md:h-full w-auto object-contain"
            />
            <span className="mt-2 text-sm font-medium text-gray-700">
              AWARD WINNING COMPANY
            </span>
          </div>

          {/*  Grid Section with Bullet Lists */}
          <div className="text-sm md:mt-30 mt-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mx-auto text-sm">
              {/* Left Column */}
              <div className="space-y-6 h-full mb-6">
                <h3 className="text-text6 text-2xl font-medium leading-7 tracking-tight">
                  How can we offer the cheapest energy saving light bulbs on the
                  web in the UK?
                </h3>
                <ul className="list-disc px-10 space-y-6 tracking-tight leading-4">
                  <li>
                    We buy our bulbs in bulk - passing on the savings to you
                  </li>
                  <li>
                    We keep our overheads as low as possible, so you pay for top
                    quality products at cut prices
                  </li>
                  <li>
                    We have built long-standing and strong relationships with
                    all the best quality branded bulb manufacturers
                  </li>
                  <li>
                    We only stock top quality bulbs that won’t disappoint our
                    customers
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="space-y-6 h-full">
                <h3 className="text-text6 text-2xl font-medium leading-7 tracking-tight">
                  How do you manage to ship so quickly and with FREE delivery?
                </h3>
                <ul className="list-disc px-10 space-y-6 tracking-tight leading-4">
                  <li>
                    We take great pride in building ongoing relationships with
                    our customers by providing a fast and efficient service
                  </li>
                  <li>
                    We send out hundreds of packages every day, so we’ve
                    negotiated lower shipping costs and passed on the savings to
                    you
                  </li>
                  <li>
                    We know that when you order something online you want it as
                    quickly as possible, so order before 4pm and we’ll dispatch
                    your item(s) the very same day
                  </li>
                </ul>
              </div>
            </div>

            {/*  Final Paragraph */}
            <p className="md:text-center text-start mt-6">
              At Energy Light Bulbs we take great pride in everything that we
              do; taking care of our customers by offering them the very best
              service at the lowest prices on the internet is one way that we
              can ensure our customers keep coming back and using us time and
              time again. We hope you find our new website easy to use, and look
              forward to providing you with a low-cost, fast, and efficient
              service!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
