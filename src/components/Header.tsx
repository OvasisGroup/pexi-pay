import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'


export default function Header() {
  return (
    <section className='bg-gradient-to-t from-mainaccent  to-mainprimary md:h-screen h-full w-full py-20 md:py-0'>
      
      <div className='grid md:grid-cols-2 gap-10 md:grid max-w-7xl mx-auto items-center justify-center h-full'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font.sans md:text-6xl text-4xl md:px-0 px-6 text-center md:text-left  font-bold text-white md:mb-6 mb-2' data-aos="fade-up">Boost your business with our premium payment solutions</h1>
          <p className='font.sans md:text-xl  text-white mb-6 md:text-left text-center px-6 md:p-0' data-aos="fade-up">Boost your sales and improve performance while we elevate your business to the next level.</p>
          <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full md:mt-6 md:mx-0' data-aos="fade-up" >Get Started</Button>
        </div>
        <div className='flex justify-start items-bottom h-full relative hidden md:block'>
          <Image src="/images/hero_image.png" alt="pexi-logo" width={600} height={100}
            priority // Optional: Improves loading performance 

            className="absolute bottom-0 h-auto w-full" data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  )
}
