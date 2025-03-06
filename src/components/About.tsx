import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gradient-to-t from-mainaccent  to-mainprimary mt-6">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
          <div className="">
            <Image
              src="/images/shopper-two.png"
              alt="image"
              width={600}
              height={350}
              className="mt-8 md:-mt-15 px-5 md:px-0"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left line-height-loose md:px-0 px-8 mb-4 mt-16">
              We tap into modern payment methods that help your business grow.
            </h1>
            <p className="p-6 text-center md:text-left md:p-0">
              We help you accept global debit and credit card payments for all
              card brands and local payment methods.
            </p>
            <div className="flex flex-col items-center md:flex md:items-start w-full mt-4">
              <Link href="/signin">
                <Button className="font-bold cursor-pointer bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-10 py-6 rounded  sm:mx-0">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
