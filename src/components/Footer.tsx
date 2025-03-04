import React from 'react'
import { Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <section className='py-6'>
    <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-4 px-6 md:px-0'>
        <div><p>© 2025 PEXIPAY. All rights reserved.</p></div>
        <div className='flex flex-row items-end md:justify-end gap-4'>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <Linkedin size={24} className='text-mainblue' />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </div>
    </div>
    </section>
  )
}
