import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import Subscription from '@/components/Subscription'
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { IoHomeOutline } from "react-icons/io5";
import Link from 'next/link'


export default function Faq() {
  return (
    <section>
        <NavigationBar/>
        <div className='relative w-full h-60 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col justify-center items-center h-full'>
            <Link href={'/'}><p className='text-white'><span><IoHomeOutline size={20} className='text-white mb-4' /></span>/home/</p></Link>
            <h1 className='font-bold text-white sm:text-3xl text-xl'>Frequently Asked Questions</h1>
        </div>
        </div>
       
    <div className='max-w-7xl mx-auto py-6 my-16 px-6 md:px-0'>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    <Subscription/>
    <MainFooter/>
    <Footer/>
    </section>
  )
}
