import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import NavigationBar from './Navbar'


export default function Header() {
  return (
    <section className='bg-gradient-to-t from-blue-700 via-blue-700 to-blue-900 h-screen w-full'>
      <NavigationBar/>
      <div className='grid sm:grid-cols-2 gap-10 md:grid max-w-7xl mx-auto items-center justify-center h-full'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font.sans sm:text-6xl text-4xl sm:px-0 px-6 text-center sm:text-left  font-bold text-white sm:mb-6 mb-2'>Boost your business with our premium payment solutions</h1>
          <p className='font.sans sm:text-xl  text-white mb-6 sm:text-left text-center px-6 sm:mb-0 sm:p-0'>Boost your sales and improve performance while we elevate your business to the next level.</p>
          <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full sm:mt-6 sm:mx-0' >Get Started</Button>
        </div>
        <div className='flex justify-start items-bottom h-full relative'>
          <Image src="/images/hero_image.png" alt="pexi-logo" width={180} height={100} layout="responsive" // Makes it responsive
            priority // Optional: Improves loading performance 
            className="absolute bottom-0 "
          />
        </div>
      </div>
    </section>
  )
}
