import React from "react";
import { Breadcrumbs } from "../components/breadcrum/breadcrumbs";

export default function TermsConditionPage() {
  return (
    <section className="w-full flex min-h-screen text-text18 px-8 py-10">
      <div className="w-full max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumbs />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight mb-10">
          Terms & Conditions
        </h1>

        {/* Image */}
        <img
          src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/free_delivery.jpg"
          alt="Free Delivery"
          className="my-6 rounded-md shadow-sm max-w-full"
        />

        <p className="mb-6 text-sm font-medium">
          www.energylightbulbs.co.uk — Energy Light Bulbs LTD
        </p>

        {/* Content Sections */}
        <div className="flex flex-col space-y-10 text-sm leading-6 tracking-tight font-medium">
          {/* Section */}
          <section>
            <h2 className="text-lg font-semibold mb-2">(1) General</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All quotations and orders are based on the purchaser being bound
                by these terms. Any conflict will default to these terms.
              </li>
              <li>
                Delivery by installments shall be treated as separate contracts.
              </li>
              <li>
                Changes to these terms must be confirmed in writing by a
                director.
              </li>
              <li>
                Acceptance of goods means acceptance of these conditions.
              </li>
              <li>
                Quotations are subject to change unless stated otherwise.
              </li>
              <li>
                Orders depend on stock availability and written confirmation.
              </li>
              <li>No order can be cancelled once placed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(2) Our Policy</h2>
            <p>
              Offering top service, premium quality products, and great value at
              all times.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(3) Order Acceptance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website orders are acknowledged via email.</li>
              <li>
                Telephone orders are accepted and confirmed verbally during the
                call.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(4) Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Prices are subject to change without notice. Errors will not be
                honored.
              </li>
              <li>Prices are in GBP and subject to VAT at 20%.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(5) Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Accepted in GBP using major debit/credit cards listed on site.
              </li>
              <li>
                Payments handled securely by PayPal; we do not store card data.
              </li>
              <li>
                Goods remain the property of the company until paid in full.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(6) Delivery</h2>
            <p className="mb-2">
              Orders are dispatched within 24 hours, allow 7–10 days for
              delivery.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Via Royal Mail, DHL, or courier services.</li>
              <li>
                If not home, courier leaves card for rescheduling or pickup.
              </li>
              <li>
                Additional costs apply if redelivery is required or failed
                delivery occurs.
              </li>
              <li>
                Missing/damaged goods must be reported within 5 days.
              </li>
              <li>
                If delivery delayed beyond 28 days, refund option is provided.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(7) Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                If order can’t be fulfilled within 28 days, refund is issued.
              </li>
              <li>
                Refunds processed after items are returned in original
                condition.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">
              (8) Description and Price of Goods
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Descriptions are accurate at time of order.</li>
              <li>
                Customers responsible for ensuring product suitability.
              </li>
              <li>
                Company not liable for errors or misprints in published data.
              </li>
              <li>
                Colour/finish may vary slightly due to screen limitations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">
              (9) Data Protection & Privacy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We comply with the Data Protection Act (2018).</li>
              <li>
                Only necessary data is stored securely, no resale of data.
              </li>
              <li>
                Anti-SPAM policy in place. No unsolicited emails sent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(10) Complaints</h2>
            <p>
              All complaints are handled fairly and should be submitted in
              writing or via our contact form.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(11) Indemnity</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Users agree to indemnify the company from losses caused by use
                of the website.
              </li>
              <li>
                We aim to ensure a virus-free site but cannot guarantee it.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(12) Copyright Notice</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content belongs to Energy Light Bulbs LTD.</li>
              <li>
                Legal action will be taken against unauthorized reuse of
                content.
              </li>
              <li>
                Site content, images, and branding are copyrighted and
                trademarked.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(13) Force Majeure</h2>
            <p>
              Contracts may be varied or canceled due to events beyond our
              control, such as natural disasters, strikes, or government
              restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">(14) Law</h2>
            <p>
              Any disputes will be governed under English law and jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
