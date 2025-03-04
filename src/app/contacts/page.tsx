import About from '@/components/About'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
    return (
        <section>
            <NavigationBar />
            <div className='relative w-full h-60 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <Link href={'/'}><p className='text-white'><span><IoHomeOutline size={20} className='text-white mb-4' /></span>/home/</p></Link>
                    <h1 className='font-bold text-white sm:text-3xl text-xl'>Contacts</h1>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-6 my-16 px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <Image src="/images/pexi-dark.png" alt="image" width={150} height={100} className='mb-6' />
                <p className='font-bold text-xl md:pr-40 px-6 md:px-0 text-center md:text-left'>We tap into modern payment methods that help your business grow. We help you accept global debit and credit card payments for all card brands and local payment methods. </p>
                <p className='mt-10'>
                info@pexipaycom
                
                </p>
                <p>For any questions</p>
                </div>
                <div className='flex flex-col items-center md:flex md:items-start mt-4 gap-4'>
                    <h1 className='font-bold text-mainblue text-2xl'>Work With Us</h1>
                    <p>Fill out the form below to get in touch with us.</p>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                    <input type="text" placeholder="Enter your name" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    <input type="email" placeholder="Enter your email address" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    </div>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                    <input type="text" placeholder="Enter your phone number" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    <input type="text" placeholder="Enter your company name" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    </div>
                    <textarea placeholder="Enter your message" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    <button className='w-full px-4 py-2 border bg-mainsecondary border-mainsecondary rounded-md text-white font-bold hover:bg-red-700 focus:outline-none focus:border-mainsecodnary cursor-pointer'>Get Started</button>
                </div>
            </div>
            <About />
            <MainFooter />
            <Footer />
        </section>
    )
}
