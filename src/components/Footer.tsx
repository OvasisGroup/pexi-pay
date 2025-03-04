import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from "next/link";


export default function Footer() {
  return (
    <section className='py-6'>
    <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-4 px-6 md:px-0'>
        <div><p>© 2025 PEXIPAY. All rights reserved.</p></div>
        <div className='flex flex-row items-end md:justify-end gap-4'>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <Link href={'https://www.linkedin.com/company/pexipay'}><FaLinkedin size={24} className='text-mainblue' /></Link>
        <Link href={'https://x.com/PexiLabs'}><FaSquareTwitter size={24} className='text-mainblue'  /></Link>
        </div>
    </div>
    </section>
  )
}
