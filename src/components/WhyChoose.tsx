import React from 'react'
import Image from 'next/image'

export default function WhyChoose() {
    return (
        <section className='bg-gray-200 py-3'>
        <section className='max-w-7xl mx-auto py-3'>
            <div className='md:grid-cols-[.75fr_3.25fr] gap-4 md:grid md:gap-10'>
                <div className='flex justify-start md:justify-center md:items-center items-start md:items-start text-left md:text-center px-6'>
                    <Image src="/images/pexi.svg" alt="image" width={50} height={50} className="mb-6" />
                    <div className='ml-4 text-left flex flex-col justify-center items-start'> 
                        <p className=''>Why Choose</p>
                        <p className='text-mainsecondary font-bold text-3xl'>Pexipay</p>
                    </div>
                </div>
                <div>
                    <p className=' px-6 md:px-0 '>We collaborate and have negotiated the best rates for you with mobile networks, banks, and money transfer operators, enabling you to collect and be settled seamlessly and flexibly.</p>
                    </div>
            </div>
        </section>
        </section>
    )
}
