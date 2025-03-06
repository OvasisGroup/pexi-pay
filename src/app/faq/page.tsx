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
        <div className='flex flex-row gap-2'>
        <Link href={'/'}><IoHomeOutline size={20} className='text-white mb-4' /></Link> <p className='text-white'> <Link href={'/'}>Home</Link> | <Link href={'/faq'} className='text-mainsecondary font-semibold'>Faqs</Link></p></div>
            <h1 className='font-bold text-white sm:text-3xl text-xl'>Frequently Asked Questions</h1>
        </div>
        </div>
       
    <div className='max-w-7xl mx-auto py-6 my-16 px-6 md:px-0'>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>What should I do if I become a victim of cybercrime?</AccordionTrigger>
        <AccordionContent>
        First, if you believe you have fallen victim to cyber crime, file a complaint or report. Your information is invaluable to helping the FBI and its partners bring cybercriminals to justice. Second, get educated about the latest and most harmful cyber threats and scams.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
      <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>How can I protect my data from online threats?</AccordionTrigger>
        <AccordionContent>
        The author of this article is a world expert in cyber security. He has over 20 years of experience in this field and is the founder and CEO of CyberSecurity Solutions. He is also the author of several books on cybersecurity and network security.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>How can I use social media safely?</AccordionTrigger>
        <AccordionContent>
        Pick strong passwords and update them frequently. This can help protect against someone who may be trying to sign on to your account for negative reasons like posting spam, impersonating you, or stalking. In addition to choosing strong passwords and updating them, remember to keep your passwords in a secure location.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
      <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>What is two-factor authentication and why is it necessary?</AccordionTrigger>
        <AccordionContent>
        Two-factor authentication (2FA), sometimes referred to as two-step verification or dual-factor authentication, is a security process in which users provide two different authentication factors to verify themselves. 2FA is implemented to better protect both a users credentials and the resources the user can access.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
      <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>How can I protect my data from online threats?</AccordionTrigger>
        <AccordionContent>
        The author of this article is a world expert in cyber security. He has over 20 years of experience in this field and is the founder and CEO of CyberSecurity Solutions. He is also the author of several books on cybersecurity and network security.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
      <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>How can I protect my computer from viruses and other malware?</AccordionTrigger>
        <AccordionContent>
        Removing a computer virus or spyware can be difficult without the help of malicious software removal tools. Some computer viruses and other unwanted software reinstall themselves after the viruses and spyware are detected and removed. Fortunately, by updating the computer and by using malicious software removal tools, you can help permanently remove unwanted software.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
      <AccordionTrigger className='text-mainblue hover:text-mainsecondary font-bold text-xl'>What is cybersecurity?</AccordionTrigger>
        <AccordionContent>
        Cybersecurity is the practice of protecting internet-connected systems such as hardware, software and data from cyberthreats. Its used by individuals and enterprises to protect against unauthorized access to data centers and other computerized systems.        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    <Subscription/>
    <MainFooter/>
    <Footer/>
    </section>
  )
}
