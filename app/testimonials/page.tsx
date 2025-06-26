import React from "react";
import { Breadcrumbs } from "../components/breadcrum/breadcrumbs";

export default function TestimonalsPage() {
  return (
<section className="w-full px-6 md:px-10 mt-10 mb-16 text-text18">
  {/* Breadcrumb */}
  <div className="mb-8">
    <Breadcrumbs />
  </div>

  {/* Heading */}
  <h1 className="text-4xl font-bold mb-8 text-gray-900">
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
