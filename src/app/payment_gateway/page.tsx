import Choose from '@/components/Choose'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import Subscription from '@/components/Subscription'
import React from 'react'
import { Button } from "@/components/ui/button"

export default function Payment() {
  return (
    <section>
      <NavigationBar />
      <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='font-bold text-mainsecondary md:text-4xl text-3xl mb-6'>Payment Integration</h1>
        <h1 className='md:text-3xl text-2xl px-6 text-white md:max-w-200 text-center font-thin'>With the fastest and easiest integration, you have full access to the most advanced technologies, with unrivaled service from our payment experts.</h1>
        <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full  md:mx-0 mt-6 cursor-pointer' >Get Started</Button>
        </div>
      </div>
      <Choose/>
      <Subscription/>
      <MainFooter/>
      <Footer />
    </section>
  )
}
