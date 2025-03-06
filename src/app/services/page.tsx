import Choose from '@/components/Choose'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";
import About from '@/components/About'
import { IoHomeOutline } from 'react-icons/io5'
import Link from 'next/link'

// const services = [
//     {
//         image: "/images/icon-pexi.png",
//         name: "Core Payment Processing",
//         description: [
//             {
//                 title: "Card Payments",
//                 body: "Accept Visa, Mastercard, AMEX, and other credit/debit cards."
//             },
//             {
//                 title: "Bank Transfers",
//                 body: "Enable direct bank payments (ACH, SEPA, etc.)."
//             },
//             {
//                 title: "Mobile Money Payments",
//                 body: "Support M-Pesa, PayPal, Apple Pay, Google Pay, etc."
//             },
//             {
//                 title: "Crypto Payments ",
//                 body: "Allow payments in BTC, ETH, USDT, and other cryptocurrencies."
//             },
//             {
//                 title: "Recurring Payments",
//                 body: "Enable subscription billing with automated payments."
//             },
//             {
//                 title: "QR Code Payments",
//                 body: "Allow customers to pay by scanning a QR code."
//             },
//         ]
//     },
//     {
//         image: "/images/icon-pexi.png",
//         name: "Core Payment Processing",
//         description: [
//             {
//                 title: "Card Payments",
//                 body: "Accept Visa, Mastercard, AMEX, and other credit/debit cards."
//             },
//             {
//                 title: "Bank Transfers",
//                 body: "Enable direct bank payments (ACH, SEPA, etc.)."
//             },
//             {
//                 title: "Mobile Money Payments",
//                 body: "Support M-Pesa, PayPal, Apple Pay, Google Pay, etc."
//             },
//             {
//                 title: "Crypto Payments ",
//                 body: "Allow payments in BTC, ETH, USDT, and other cryptocurrencies."
//             },
//             {
//                 title: "Recurring Payments",
//                 body: "Enable subscription billing with automated payments."
//             },
//             {
//                 title: "QR Code Payments",
//                 body: "Allow customers to pay by scanning a QR code."
//             },
//         ]
//     },
// ]

const teamMembers = [
    {
        image: "/images/icon-pexi.png",
        name: "High-Risk Credit Card Processing",
        description: "We are a payment gateway built and designed by a team with over seven years of industry experience. With this expertise, we have developed a system that incorporates the latest technology, including fraud detection, chargeback protection, and real-time transaction monitoring. This, in turn, ensures smooth onboarding and transparent pricing with no hidden costs.",
    },
    {
        image: "/images/icon-pexi.png",
        name: "Alternative payment methods",
        description: "Our robust Api incorporates different payment methods in Africa and the world, opening up more secure avenues, such as e wallets, vouchers, prepaid cards , direct debits and bank transfers and at the same time minimizing fraud and chargebacks",
    },
    {
        image: "/images/icon-pexi.png",
        name: "Real-time reporting and analytics",
        description: "View how you are performing, get access to real time information that allows you to pivot and make informed decisions on time and in time.",
    },
    {
        image: "/images/icon-pexi.png",
        name: "Smart transaction routing",
        description: "Analyse reports and make the informed decision to direct your transactions into the channels that offer best fees and returns, and ultimately improve approval ratings."
    },
    {
        image: "/images/icon-pexi.png",
        name: "Fraud and charge back prevention ",
        description: "Your business is safe with us, we continuously work with new age fraud and chargeback prevention methods, able to detect any hazardous threats in real time, and in return protecting you from any unforeseen losses."
    },
    {
        image: "/images/icon-pexi.png",
        name: "Payment processing for igaming",
        description: "As a provider we take into consideration your verticals/risk industries and associated licenses. Keeping that in mind we have designated 24/7 customer support, instant escalated resolutions, multiple payment methods/multi currency support and a system designed to help you grow by offering a secure environment, and straight through  processing."
    },
    {
        image: "/images/icon-pexi.png",
        name: "International Payments",
        description: "Personal (Peer-to-Peer) Payments, Enterprise (B2B) Payments, Mass Payments, Merchant Solutions & FX Trading and Bulk FX."
    },

];

export default function Services() {
    return (
        <section>
            <NavigationBar />
            <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
                <div className='flex flex-col justify-center items-center h-full'>
                <div className='flex flex-row gap-2'>
              <Link href={'/'}><IoHomeOutline size={20} className='text-white mb-4' /></Link> <p className='text-white'> <Link href={'/'}>Home</Link> | <Link href={'/services'} className='text-mainsecondary font-semibold'>Services</Link></p></div>
                    <h1 className='font-bold text-mainsecondary md:text-4xl text-3xl mb-6'>Our Services</h1>
                    <h1 className='md:text-3xl text-2xl px-6 text-white md:max-w-200 text-center font-thin'>We tap into modern payment methods that help your business grow. We help you accept global debit and credit card payments for all card brands and local payment methods.</h1>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 max-w-7xl mx-auto mt-15 mb-20'>
                {teamMembers.map((member, index) => (
                    <div key={index} className="border-1 p-6 rounded-lg mx-6 md:mx-0 hover:bg-mainblue transition-colors hover:text-white">
                        <div className='flex md:flex-row flex-col gap-6 justify-between items-start' >
                            <div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={20}
                                    height={80}
                                    className="mb-4"
                                />
                                <p className="text-xl font-semibold text-left pr-4 text-mainsecondary mb-4">{member.name}</p>
                                <p className="text-sm text-left mb-4">{member.description}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>


            <About />
            <div className='-mt-10'></div>
            <MainFooter />
            <Footer />
        </section>
    )
}
