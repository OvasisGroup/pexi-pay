import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function About() {
    return (
        <section className='bg-gradient-to-t from-mainaccent  to-mainprimary mb-6'>
            <div className='max-w-7xl mx-auto '>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
                <div className=''>
                    <Image src="/images/about.png" alt="image" width={350} height={350} className='mt-10' />
                </div>
                <div className='flex flex-col justify-center items-center text-white'>
                    <h1 className='text-4xl md:text-5xl font-bold text-center md:text-left  md:p-0 p-8 mb-4'>We tap into modern payment methods that help your business grow.</h1>
                    <p>We help you accept global debit and credit card payments for all card brands and local payment methods.</p>
                    <div className="flex flex-col items-start w-full mt-4">
                    <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full  sm:mx-0' >Get Started</Button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
