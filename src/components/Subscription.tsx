import Image from 'next/image'
import React from 'react'

export default function Subscription() {
  return (
    <section className='max-w-7xl mx-auto bg-mainblue md:rounded-4xl'>
    <div className=' pt-20 md:pt-0' >
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4'>
            <div>
                <Image src="/images/man-bags.png" alt="image" width={1000} height={100} className='md:-mt-20 mt-15 px-10 md:px-0' />
            </div>
            <div className='flex flex-col justify-center items-start gap-4 px-16'>
                <h1 className='text-white font-bold text-3xl'>Join Our Mailing List</h1>
                <input type="email" placeholder="Enter your email address" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                <button className='w-full px-4 py-2 border bg-mainsecondary border-mainsecondary rounded-md text-white font-bold hover:bg-red-700 focus:outline-none focus:border-mainsecodnary cursor-pointer'>Subscribe</button>
            </div>
        </div>
    </div>
    </section>
  )
}
