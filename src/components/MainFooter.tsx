import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainFooter() {
  return (
    <section className=' bg-maingrey mt-10 py-4'>
    <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-4 px-6 sm:px-0'>
        <div>
            <Image src="/images/pexi-dark.png" alt="image" width={150} height={100} className='' />
        </div>
        <div>
            <ul className='flex flex-row gap-4 text-mainblue md:items-end md:justify-end'>
                <li><a href='#'>Gateway</a></li>
                <li><Link href={'/faq'}>FAQs</Link></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>              
            </ul>
        </div>
    </div>
    </section>
  )
}
