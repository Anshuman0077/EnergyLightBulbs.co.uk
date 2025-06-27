import React from "react";

export default function LoginPage() {
  return (
<section className="w-full">
  <div className="min-h-screen w-full  grid grid-cols-12 gap-6 text-text18">
    
    {/* Registered Customers (Left Column) */}
    <div className="col-span-5  ">
      <h1 className="text-2xl font-semibold mb-4">REGISTERED CUSTOMERS</h1>
      <p className="text-sm mb-8">If you have an account, sign in with your email address.</p>

      <form className="space-y-6 w-full">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input type="email" id="email" className="border px-3 py-2 " />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <input type="password" id="password" className="border px-3 py-2 " />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="show-password"
            className="w-5 h-5 accent-blue-600"
          />
          <label htmlFor="show-password" className="text-sm mt-1">Show password</label>
        </div>
      </form>
    </div>

    {/* Vertical Divider */}
    <div className="col-span-1 flex justify-center">
      <div className="w-[1px] h-1/4 bg-gray-300" />
    </div>

    {/* Sign Up Section (Right Column) */}
    <div className="col-span-6  rounded-md">
      <h1 className="text-2xl font-semibold mb-4">NEW CUSTOMER?</h1>
      <p className="text-sm mb-8">Create an account to enjoy a personalized shopping experience.</p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium">
        Sign Up
      </button>
    </div>
  </div>
</section>

  );
}
