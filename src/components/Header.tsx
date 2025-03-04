"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link";


gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const sectionRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Starts animation when 80% of the element is in view
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, x: 100 }, // Start position (off-screen to the right)
        {
          opacity: 1,
          x: 0, // Moves to original position
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Starts animation when 80% of the element is in view
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className='bg-gradient-to-t from-mainaccent  to-mainprimary md:h-screen h-auto w-full py-20 md:py-0'>
      
      <div className='grid md:grid-cols-2 gap-10 md:grid max-w-7xl mx-auto items-center justify-center h-full'>
        <div ref={sectionRef} className='flex flex-col justify-center items-center'>
          <h1 className='font.sans md:text-6xl text-4xl md:px-0 px-6 text-center md:text-left  font-bold text-white md:mb-6 mb-2' data-aos="fade-up">Boost your business with our premium payment solutions</h1>
          <p className='font.sans md:text-xl  text-white mb-6 md:text-left text-center px-6 md:p-0' data-aos="fade-up">Boost your sales and improve performance while we elevate your business to the next level.</p>
          <div className="flex flex-col items-center w-full md:flex md:items-start mt-4">
          <Link href="signin"><Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full ' data-aos="fade-up" >Get Started</Button></Link>
          </div>
        </div>
        <div ref={sectionRef} className='flex justify-start items-bottom h-full relative hidden md:block'>
          <Image src="/images/woman_shopping_image.png" alt="pexi-logo" width={500} height={100}
            priority // Optional: Improves loading performance 

            className="absolute bottom-0 h-auto w-full" data-aos="fade-up"
          />
          <Image src="/images/shopper.png" alt="pexi-logo" width={800} height={100}
            priority // Optional: Improves loading performance 

            className="absolute bottom-0 h-auto w-full" data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  )
}
