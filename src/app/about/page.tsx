import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import Link from 'next/link'
import NavigationBar from '@/components/Navbar'
import MainFooter from '@/components/MainFooter'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import Subscription from '@/components/Subscription'
import Choose from '@/components/Choose'

export default function About() {
  return (
    <section>
        <NavigationBar/>
        <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-row gap-2'>
              <Link href={'/'}><IoHomeOutline size={20} className='text-white mb-4' /></Link> <p className='text-white'> <Link href={'/'}>Home</Link> | <Link href={'/about'} className='text-mainsecondary font-semibold'>About Us</Link></p></div>
            <h1 className='font-bold text-mainsecondary sm:text-3xl text-xl'>About PexiPay</h1>
            <h1 className='font-light md:text-3xl text-xl md:font-normal font-semibold text-white mb-6 md:max-w-200 text-center md:px-0 px-8'>We collaborate and have negotiated the best rates for you with mobile networks, banks, and money transfer operators, enabling you to collect and be settled seamlessly and flexibly. </h1>
            <Link href="signin"><Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-10 py-6 rounded  md:mx-0 mt-2 cursor-pointer' >Get Started</Button></Link>
        </div>
        </div>
       
    <div className='max-w-7xl mx-auto py-6  px-6 md:px-0 grid md:grid-cols-2 gap-6 mt-10 mb-8'>
      <div className='bg-maingrey p-6 rounded-2xl'><h1 className='text-mainsecondary font-bold mb-4 text-2xl'>We tap into modern payment methods that help your business grow. We help you accept global debit and credit card payments for all card brands and local payment methods. </h1></div>
      <div className=''><p className='mb-0 md:mb-2'>We are a fintech company comprised of members with expertise in banking, e-commerce, marketing, and technical spaces, with over 25 years of experience. We collaborate and have negotiated the best rates for you with mobile networks, banks, and money transfer operators, enabling you to collect and be settled seamlessly and flexibly. Every client receives a personal account manager who is available round-the-clock to connect you to our turnkey white-label solution.</p></div>
    </div>
    <div className="max-w-7xl mx-auto font-bold text-3xl text-mainblue -mb-16 px-6 md:px-0">Why Choose Us ...</div>
   <Choose/>
    <Subscription/>
    <MainFooter/>
    <Footer/>
    </section>
  )
}
