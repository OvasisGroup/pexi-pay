"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";

export default function TermsAndConditions() {
  return (
    <>
      <NavigationBar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using PEXIPAY's payment gateway services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Service Description
            </h2>
            <p className="text-gray-700">
              PEXIPAY provides payment gateway services that enable businesses
              to process payments online. Our services include payment
              processing, transaction management, and related financial
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any fraudulent or illegal activities</li>
              <li>Keep your account information up to date</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Payment Processing
            </h2>
            <p className="text-gray-700">
              We process payments through secure third-party payment processors.
              By using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Pay all fees associated with our services</li>
              <li>Provide valid payment information</li>
              <li>Authorize us to process payments on your behalf</li>
              <li>Accept our refund and chargeback policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Fees and Charges</h2>
            <p className="text-gray-700">
              Our fees are clearly displayed on our website. We reserve the
              right to modify our fees with reasonable notice. You are
              responsible for all fees associated with your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content, features, and functionality of our services,
              including but not limited to text, graphics, logos, and software,
              are the exclusive property of PEXIPAY and are protected by
              international copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              PEXIPAY shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your account and
              access to our services at our sole discretion, without prior
              notice, for conduct that we believe violates these Terms and
              Conditions or is harmful to other users, us, or third parties, or
              for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms and Conditions at any
              time. We will notify you of any changes by posting the new Terms
              and Conditions on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="text-gray-700 mt-2">Email: legal@pexipay.com</p>
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
