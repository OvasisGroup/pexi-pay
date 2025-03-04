import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Signin() {
    return (
        <section className='bg-gradient-to-t from-mainaccent  to-mainprimary h-screen w-full'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='flex flex-col justify-center items-center gap-4 w-120'>
                    <Link className='text-2xl font-bold' href='/'>
                        <Image
                            aria-hidden
                            src="/images/pexi_logo.png"
                            alt="Globe icon"
                            width={200}
                            height={16}
                            priority
                        // layout="responsive" 
                        />
                    </Link>
                    {/* <h1 className='font-bold text-white sm:text-3xl text-xl'>Sign In</h1> */}
                    <input type="text" placeholder="Enter Username" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    <input type="password" placeholder="Enter Password" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen' />
                    <button className='w-full px-4 py-2 border bg-mainsecondary border-mainsecondary rounded-md text-white font-bold hover:bg-red-700 focus:outline-none focus:border-mainsecodnary cursor-pointer'>Get Started</button>
                </div>
            </div>
        </section>
    )
}
