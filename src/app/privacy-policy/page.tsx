"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <NavigationBar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              At PEXIPAY, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our payment gateway services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-medium mb-2">
              2.1 Personal Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name and contact information</li>
              <li>
                Payment information (processed securely through our payment
                partners)
              </li>
              <li>Account credentials</li>
              <li>Transaction history</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">2.2 Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage patterns and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Process payments and transactions</li>
              <li>Provide customer support</li>
              <li>Improve our services</li>
              <li>Send important updates and notifications</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Payment Information
            </h2>
            <p className="text-gray-700">
              We use industry-standard encryption and security measures to
              protect your payment information. We do not store your full
              payment details on our servers. All payment processing is handled
              by secure third-party payment processors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-gray-700 mt-2">Email: privacy@pexipay.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Updates to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <div className="mt-8">
            <Link
              href="/"
              className="text-mainblue hover:text-mainsecondary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
