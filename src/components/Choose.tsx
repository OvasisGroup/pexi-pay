import React from 'react'
import Image from 'next/image'

export default function Choose() {
  return (
    <section className='max-w-7xl mx-auto mt-10 mb-10 md:mb-20'>
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 px-6 sm:px-0 py-10'>
        <div className='pr-6'>
            <Image src="/images/picone.jpg" alt="image" width={90} height={100} className='bg-black mb-4' />
            <h1 className='font-bold text-mainsecondary sm:text-2xl text-xl'>User friendly API</h1>
            <p>Our API is as easy as three fingers.</p>
        </div>
        <div className='pr-6 sm:border-l-2 sm:pl-6'>
        <Image src="/images/px2.jpg" alt="image" width={100} height={100} className='bg-black mb-4' />
            <h1 className='font-bold text-mainsecondary sm:text-2xl text-xl'>Fully secured</h1>
            <p>Our API fully compliant with PCI DSS Level 1.</p>
        </div>
        <div className='pr-6 sm:border-l-2 sm:pl-6'>
        <Image src="/images/px3.jpg" alt="image" width={100} height={100} className='bg-black mb-4' />
            <h1 className='font-bold text-mainsecondary sm:text-2xl text-xl'>Cost-efficient</h1>
            <p>Safe time and money using our fully packed out of the box solution.</p>
        </div>
        <div className='pr-6 sm:border-l-2 sm:pl-6'>
        <Image src="/images/px4.jpg" alt="image" width={100} height={100} className=' mb-4' />
            <h1 className='font-bold text-mainsecondary sm:text-2xl text-xl'>Lightning fast onboarding</h1>
            <p>Get approved within a day.</p>
        </div>
    </div>
    </section>
  )
}
