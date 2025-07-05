import React from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

export default function TestimonalsPage() {
  return (
<section className="w-full  max-w-7xl  mx-auto px-6  md:mt-10 mt-2 md:mb-16 mb-2 text-text18">
  {/* Breadcrumb */}
  <div className="md:mb-8 mb-2">
    <Breadcrumbs />
  </div>

  {/* Heading */}
  <h1 className="md:text-4xl text-2xl  md:font-bold font-semibold md:mb-8 mb-4  text-gray-900">
    What Our Customers Say!
  </h1>

  {/* Description Paragraph */}
  <p className="mb-8 text-base md:text-lg leading-relaxed tracking-normal text-gray-700 w-full">
    We are delighted to have received many enthusiastic emails from customers who have used us and continue to do so.
    Rather than just telling you why we think you should use us for your energy saving light bulbs, fitments and fittings —
    why not hear directly from our customers?
  </p>

  {/* Testimonial Image */}
  <div className="overflow-hidden px-4">
    <img
      src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/testimonials.jpg"
      alt="Customer Testimonials"
      className=" object-contain"
    />
  </div>
</section>

  );
}
