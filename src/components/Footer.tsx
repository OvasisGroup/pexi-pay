import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 px-6 md:px-0">
        <div>
          <p>
            © 2025 PEXIPAY. All rights reserved, Powered by{" "}
            <Link href="https://www.pexipay.com" className="text-mainsecondary">
              PEXI LABS
            </Link>
          </p>
        </div>
        <div className="flex flex-row items-end md:justify-end gap-4">
          <Link
            href="/privacy-policy"
            className="hover:text-mainsecondary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-conditions"
            className="hover:text-mainsecondary transition-colors"
          >
            Terms & Conditions
          </Link>
          <FaLinkedin
            size={24}
            className="text-mainblue hover:text-mainsecondary transition-colors cursor-pointer"
          />
          <FaSquareTwitter
            size={24}
            className="text-mainblue hover:text-mainsecondary transition-colors cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
