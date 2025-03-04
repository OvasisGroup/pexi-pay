import Choose from '@/components/Choose'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import React from 'react'

export default function Team() {
    return (
        <section>
            <NavigationBar/>
            <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='font-bold text-mainsecondary md:text-4xl text-3xl mb-6'>Team</h1>
        <h1 className='md:text-3xl text-2xl px-6 text-white md:max-w-200 text-center font-thin'>We are a fintech company comprised of members with expertise in banking, e-commerce, marketing, and technical spaces, with over 25 years of experience.</h1>
        </div>
      </div>
            <div>
                Team Members
            </div>
            <Choose />
            <MainFooter />
            <Footer />
        </section>
    )
}
