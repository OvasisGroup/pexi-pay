import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import Link from 'next/link'
import NavigationBar from '@/components/Navbar'
import MainFooter from '@/components/MainFooter'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section>
        <NavigationBar/>
        <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-row'><Link href={'/'}><IoHomeOutline size={20} className='text-white mb-4' /><p className='text-white'>/home/</p></Link></div>
            <h1 className='font-bold text-mainsecondary sm:text-3xl text-xl'>About PexiPay</h1>
            <h1 className='font-light md:text-3xl text-2xl text-white mb-6 max-w-200 text-center'>We collaborate and have negotiated the best rates for you with mobile networks, banks, and money transfer operators, enabling you to collect and be settled seamlessly and flexibly. </h1>
            <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full  md:mx-0 mt-6 cursor-pointer' >Get Started</Button>
        </div>
        </div>
       
    <div className='max-w-7xl mx-auto py-6 my-16 px-6 md:px-0'>
   <p className='mb-0 md:mb-25'>We tap into modern payment methods that help your business grow. We help you accept global debit and credit card payments for all card brands and local payment methods. We are a fintech company comprised of members with expertise in banking, e-commerce, marketing, and technical spaces, with over 25 years of experience. We collaborate and have negotiated the best rates for you with mobile networks, banks, and money transfer operators, enabling you to collect and be settled seamlessly and flexibly. Every client receives a personal account manager who is available round-the-clock to connect you to our turnkey white-label solution.</p>
    </div>
   

    <MainFooter/>
    <Footer/>
    </section>
  )
}
