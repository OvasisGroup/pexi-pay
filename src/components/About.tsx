import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className='max-w-7xl mx-auto bg-gradient-to-t from-mainaccent  to-mainprimary mb-6 rounded-2xl'>
    <div className='grid gap-y-10 gap-x-8 py-16 md:grid-cols-2 text-white'>
    <div className='col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <Image src="/images/about.png" alt="image" width={350} height={350} className="mx-auto" />
    </div>
    <div>About</div>
    </div>
    </section>
  )
}
