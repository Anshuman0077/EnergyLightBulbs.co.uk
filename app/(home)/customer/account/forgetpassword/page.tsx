"use client";
import { Input } from "@/app/components/Input/Input";
import React from "react";
import { useState } from "react";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full flex  text-text18">
      <div className="space-y-8">
        <h1 className="text-text17 text-5xl mt-3 tracking-tight">
          Forgot Your Password ?
        </h1>
        <p>
          Please enter your email address below to recieve a password reset link
        </p>
        <form className="flex flex-col">
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
        <p className="text-xs text-text6">Required fields</p>
        <button className="mt-4 border-border9 bg-bg17 px-4 py-2 hover:bg-bg16 hover:opacity-90  text-text1 font-bold rounded-md">
          Reset My Password
        </button>
      </div>
    </section>
  );
}
