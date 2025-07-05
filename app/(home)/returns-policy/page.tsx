import React from "react";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

export default function ReturnPolicyPage() {
  return (
    <section className="w-full flex min-h-screen text-text18 md:py-10 px-6 md:px-18 sm:px-10  tracking-tighter leading-4">
      <div className="w-full max-w-7xl px-6 mx-auto">
        <div className="md:mb-6 mb-3 ">
          <Breadcrumbs />
        </div>

        <h1 className="md:text-4xl  text-2xl font-semibold md:font-bold md:mb-8 mb-4 tracking-tight">
          Returns Policy
        </h1>

        <div className="space-y-2 text-sm leading-4 tracking-tighter font-medium">
          <p className="font-semibold">Consumer Rights Act 2015</p>

          <p className="font-semibold">Returns</p>

          <ul className="pl-6 space-y-2 mb-6">
            <li>
              (a) You have the right to cancel the contract at any time up to
              the end of 14 working days after you receive the goods providing
              the goods have not been fitted or modified in any way and
              providing they are returned with the original packaging and
              providing the goods are in a resalable condition full refund will
              be given.
            </li>
            <li>
              (b) Cancellation rights, you must immediately send an email to
              orders@energylightbulbs.co.uk stating your order number and that
              you wish to cancel your order.
            </li>
            <li>
              (c) All items ordered incorrectly or not required may be subject
              to 15% percent handling charge goods must be returned within 28
              days of receiving your parcel, customer is responsible for the
              return cost for any item ordered incorrectly or not required. No
              Return will be accepted after 28 days.
            </li>
          </ul>

          <p>Please keep in mind the following:</p>

          <ul className="list-disc pl-6 space-y-2 ">
            <li>
              Items returned within 14 days but not in their original and
              undamaged packaging will also incur a -15% charge per package.
            </li>
            <li>
              If you return an item that doesn't adhere to our returns procedure
              or doesn't include a returns form, you may be liable for a £10
              administration fee.
            </li>
          </ul>

          <p>
            Please include a cover note containing your order number, the email
            address you placed the order with and the products you are
            returning.
          </p>
          <p>The goods and packaging are undamaged</p>

          <p className="font-semibold">
            IMPORTANT: We need to be able to identify an item with your order.
            We can only do this if you follow our returns process. Please do not
            send us items back that do not follow this process as they cannot be
            identified properly and will not be replaced or refunded.
          </p>

          <p className="font-semibold">Where can I find my order number?</p>
          <p>
            Your order number can be found on the confirmation email we sent you
            after you completed your purchase.
          </p>

          <p className="font-semibold">
            What do I need to know before I return an item?
          </p>
          <p>
            When returning an item, you will need to include the following in a
            cover note (and email us your request too):
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>The email you registered your purchase with</li>
            <li>Order Number</li>
            <li>What product(s) you are returning</li>
            <li>The reason for the return</li>
            <li>What action you would like us to take</li>
            <li>Enclose copy of the order</li>
          </ul>

          <p className="font-semibold">
            Please then arrange for the goods to be returned to us:
          </p>

          <div className="whitespace-pre-line">
            Energy Light Bulbs Ltd{"\n"}
            T2 Arundel Road{"\n"}
            Uxbridge{"\n"}
            Middlesex{"\n"}
            UB8 2RP
          </div>

          <p>Goods must not be used or installed,</p>
          <div className="border-1 border-border11 md:w-1/3 w-full">
            <div className="border-b-1 border-border11 p-4">
              <p className="w-full  leading-4 md:tracking-relaxed tracking-tighter md:text-sm text-xs">
                {" "}
                <b>Your legal rights:</b> When you buy goods from a business, in
                law you have a number of rights as a consumer. These include the
                right to claim a refund, replacement.
              </p>
            </div>
            <div className="p-4 flex items-center">
              <p className="w-full leading-4 tracking-tighter md:text-sm text-xs">
                {" "}
                <b>Our policy:</b> In addition to your legal rights, we also
                allow you to return goods if you simply change your mind. Please
                return the unused goods to us with the original till receipt
                within 14 days and we will offer you an exchange or a credit
                note or full refund.
              </p>
            </div>
          </div>
           <b>Damaged or Missing goods should be reported within 5 days of the delivery</b>

          <div className="space-y-4 flex flex-col py-3">
            <p>Within 14 days of informing us of your order cancellation, returning at your cost.</p>
            <ul className="space-y-2">
              <li>(d) If you cancel your order after the goods have been dispatched, you will be responsible for returning the goods to us at your own cost. You must take reasonable care to ensure goods are not damaged in transit.</li>
              <li>
                (e) Once you have notified us that you are cancelling the contract, we will refund or re-credit you within 14 days for any sum that has been paid by you or debited from your credit card for the goods only, and not for the packing and shipping costs, only after the cancelled items have been received, subject to the goods being received in unused, undamaged condition in their original packaging.
              </li>
              <li>(f) If you do not return the goods as required, we may charge you a sum not exceeding the direct costs of recovering the goods.</li>
            </ul>
           
          </div>
        </div>
      </div>
    </section>
  );
}
