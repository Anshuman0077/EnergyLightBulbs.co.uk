import React from "react";

export const BottomFoot = () => {
  return (
    <div className="w-full py-4  ">
      <div className="flex flex-wrap   justify-between  
       items-center w-full gap-y-3">
        {/* Left Links */}
        <div className="flex flex-wrap justify-center gap-x-3 text-sm text-text7">
          <a href="/about-us" className="hover:text-text6">
            About Us
          </a>
          <span>|</span>
          <a href="/delivery" className="hover:text-text6">
            Delivery
          </a>
          <span>|</span>
          <a href="/testimonials" className="hover:text-text6">
            Testimonials
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:text-text6">
            Privacy
          </a>
          <span>|</span>
          <a href="/security" className="hover:text-text6">
            Security
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-text6">
            Terms
          </a>
          <span>|</span>
          <a href="/returns-policy" className="hover:text-text6">
            Return Policy
          </a>
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap justify-center gap-x-3 text-sm text-text7">
          <a href="/customer/account/login" className="hover:text-text6">
            Login
          </a>
          <span>|</span>
          <a href="/customer/account/create" className="hover:text-text6">
            Sign Up
          </a>
          <span>|</span>
          <a href="/sales/guest/form" className="hover:text-text6">
            My Orders Status
          </a>
        </div>
      </div>
    </div>
  );
};
