import React from "react";
import { Breadcrumbs } from "../components/breadcrum/breadcrumbs";

export default function SecurityPage() {
  return (
<section className="w-full flex min-h-screen text-text18 px-8 py-10">
  <div className="w-full  mx-auto">
    {/* Breadcrumb */}
    <div className="mb-4">
      <Breadcrumbs />
    </div>

    {/* Heading */}
    <h1 className="text-3xl font-bold mb-10">Security</h1>

    {/* Banner Image */}
    <img
      src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/free_delivery.jpg"
      alt="Free Delivery"
      className="mb-8 shadow-sm object-contain max-w-full"
    />

    {/* Security Content */}
    <div className="flex flex-col space-y-6 tracking-tight leading-relaxed text-sm font-medium">
      <span>At Energy Light Bulbs,</span>

      <p>
        The security of transactions and your personal information is our
        priority! We understand the importance of secure purchasing on our
        website. We care about the security of your details and make every
        effort to protect them! The payment system Energy Light Bulbs uses is
        provided by Sage Pay and is fully secure. Energy Light Bulbs does not
        have access to your card details.
      </p>

      <p>
        When an order is placed on www.energylightbulbs.co.uk, your card
        details are encrypted using 128-bit encryption. Only when the details
        arrive in our system are they decrypted. Your details are not shown in
        plain text anywhere. Our website uses SSL (Secure Socket Layer)
        encryption — a standard for all secure areas including customer
        information and payment data. It is virtually impossible for this
        information to be intercepted and read.
      </p>

      <p>
        Provided you are using an SSL-compliant browser like Chrome, Firefox,
        Safari, or Edge, you can conduct encrypted transactions without the risk
        of anyone intercepting your card information. This makes online credit
        card usage far safer than in many physical retail stores.
      </p>

      <p>Energy Light Bulbs does not have access to your card details.</p>

      <p>
        Energy Light Bulbs does not disclose, sell, loan, or rent your data to
        any other party.
      </p>
    </div>
  </div>
</section>

  );
}
