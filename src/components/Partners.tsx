"use client"
import Image from "next/image";

export default function CurrencyCarousel() {
    return (
      <div className="relative max-w-7xl mx-auto overflow-hidden py-1 mt-5 bg-white border-r-1 border-l-1 border-mainblue rounded-xl">
        <div className="flex w-max animate-marquee ">
        {/* Scrolling Wrapper */}
        <div key={1} className="flex  space-x-10 bg-grey-300">
          {[
            "/images/visa.png",
            "/images/amex.png",
            "/images/mastercard.png",
            "/images/maestro.png",
            "/images/jcb.png",
            "/images/visa.png",
            "/images/amex.png",
            "/images/mastercard.png",
            "/images/maestro.png",
            "/images/jcb.png",
            "/images/visa.png",
            "/images/amex.png",
            "/images/mastercard.png",
            "/images/maestro.png",
            "/images/jcb.png",

          ].map((item, index) => (
            <div
              key={index}
              className="text-white text-lg font-bold  py-2 flex flex-col items-center justify-center"
            >
              <Image
                src={item}
                alt="image"
                width={60}
                height={60}
                className=" flex mx-auto justify-center items-center"
              />
            </div>
          ))}
        </div>
        </div>
  
        {/* Tailwind CSS Animation */}
        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    );
  }
  