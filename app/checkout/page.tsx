"use client";
import React, { useState } from "react";

export default function ShippingPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  return (
    <main className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Shipping Address</h1>

      <form className="space-y-4">
        <div>
          <label>Email Address *</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        {/* repeat for First Name, Last Name, City, Postal Code, Phone, etc. */}

        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-4"
          >
            Next
          </button>
        </div>
      </form>
    </main>
  );
}
