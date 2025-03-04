"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful password reset request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSuccess(true);
    } catch (err) {
      setError("Failed to send reset instructions. Please try again.");
    }
  };

  if (showSuccess) {
    return (
      <section className="bg-gradient-to-t from-mainaccent to-mainprimary min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-md px-4 text-center">
          <h1 className="font-bold text-white text-2xl">Check Your Email</h1>
          <p className="text-white text-lg mt-2">
            We've sent password reset instructions to your email address.
          </p>
          <Link
            href="/signin"
            className="mt-4 inline-block px-6 py-2 bg-mainsecondary text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-t from-mainaccent to-mainprimary min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex items-center text-white hover:text-mainsecondary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="w-full max-w-md px-4">
        <div className="flex flex-col items-center gap-4">
          <Link className="text-2xl font-bold" href="/">
            <Image
              aria-hidden
              src="/images/pexi_logo.png"
              alt="Globe icon"
              width={200}
              height={16}
              priority
            />
          </Link>
          <h1 className="font-bold text-white text-2xl">Reset Password</h1>
          <p className="text-white text-center text-sm">
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>
          {error && (
            <div className="w-full p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 border bg-mainsecondary border-mainsecondary rounded-md text-white font-bold hover:bg-red-700 focus:outline-none focus:border-mainsecodnary cursor-pointer"
            >
              Send Reset Instructions
            </button>
          </form>
          <p className="text-white text-sm">
            Remember your password?{" "}
            <Link href="/signin" className="text-mainsecondary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
