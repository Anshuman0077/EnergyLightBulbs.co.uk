import React from "react";
import { Breadcrumbs } from "../components/breadcrum/breadcrumbs";

export default function PrivancyPage() {
  return (
<section className="w-full flex min-h-screen text-text18 px-8 py-10">
  <div className="w-full mx-auto">
    {/* Breadcrumb */}
    <div className="mb-6">
      <Breadcrumbs />
    </div>

    {/* Page Title */}
    <h1 className="text-2xl font-bold tracking-tight mb-10">
      Privancy and Cookie Policy
    </h1>

    {/* Image */}
    <img
      src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/free_delivery.jpg"
      alt=""
      className="mb-8 rounded-md shadow-sm max-w-full h-auto object-contain"
    />

    {/* Policy Content */}
    <div className="space-y-6 leading-6 tracking-tighter text-sm">
      <p>
        Energy Light Bulbs Ltd is committed to all visitors’ rights to privacy.
      </p>

      <p>
        Energy Light Bulbs Ltd is committed to all visitors’ to protecting your
        privacy and complying with the General Data Protection Regulation data
        protection laws in the United Kingdom Rights to privacy. Your personal
        information will always be treated lawfully according to the Data
        Protection Act 2018 General Data Protection Regulations (GDPR). We use
        the information we collect about you to fulfil your order.
      </p>

      <div className="space-y-4 tracking-tighter leading-6">
        <div className="space-y-1">
          <p className="">To process your order:</p>
          <p>Data collected on our site is used to:</p>
          <p>
            To process your order to facilitate order fulfilment: Energy Light
            Bulbs requires the following details:
          </p>
        </div>

        <div className="pl-4 space-y-1">
          <p>1. Orders placed online by customer’s</p>
          <p>
            2. Energy Light Bulbs Ltd Use date to improve and provide a better
            service
          </p>
          <p>
            3. We share your information with third party companies for the
            fulfilment of your order
          </p>
        </div>

        <p>
          Energy Light Bulbs use this information to fulfil the order you placed
          and if there any issues, to get in touch with you about the order
          Energy Light Bulbs Ltd do not share our customer’s data with any third
          parties who are not related to your order
        </p>

        {/* Cookies Section */}
        <div className="space-y-2 tracking-tighter leading-6">
          <p className="">Cookies:</p>
          <p>
            Cookies are files used by your internet browser to hold some data on
            your PC’s. We use “cookies” which are stored on your web browser in
            order to provide some of the personalised features of our web site.
          </p>
          <p>
            We use cookies to improve user experience, and analyse website
            traffic. For these reasons, we may share data with our analytics
            partners, We use cookies to improve your experience on our website
            and to show you personalised content.
          </p>
          <p>
            If you do not wish to be identified in this way, you can prevent
            this by changing the appropriate settings in your web browser, this
            will however stop you from using some of the functions of our web
            site. Most retail websites use cookies.
          </p>
        </div>

        {/* Cookie Control Section */}
        <div className="space-y-2 leading-6 tracking-tighter">
          <p className="">How to switch off cookies:</p>
          <p>
            Go to your internet options by clicking on Tools, clicking on
            Internet options, clicking on Privacy you can block cookies from
            being downloaded, however if you block cookies, you may not be able
            place any orders on our website. Nearly all modern retail websites
            use cookies.
          </p>
          <p>
            Please be aware our cookies will not contain confidential data like
            your address, telephone number or payment card details. Our cookies
            do not store payment card details.
          </p>
          <p>
            Cookies do not take any system data or take any other data from your
            computer. Cookies from our website can only be decrypted by our web
            server. Nearly all modern retail websites use cookies.
          </p>
          <p className="font-semibold">
            We will never pass your information to any third party companies,
          </p>
          <p className="font-semibold">
            Energy Light Bulbs do not ask for sensitive personal data.
          </p>
          <p>
            We have an anti-SPAM policy and will never send you any unsolicited
            e-mail. Furthermore, as required by the UK Data Protection
            Legislation, we do not provide your email address to other companies
            for Marketing purposes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
