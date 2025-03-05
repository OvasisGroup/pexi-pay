import Choose from '@/components/Choose'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";
import About from '@/components/About'

const services = [
    {
        image: "/images/icon-pexi.png",
        name: "Core Payment Processing",
        description: [
            {
                title: "Card Payments:",
                body: "Accept Visa, Mastercard, AMEX, and other credit/debit cards."
            },
            {
                title: "Bank Transfers:",
                body: "Enable direct bank payments (ACH, SEPA, etc.)."
            },
            {
                title: "Mobile Money Payments:",
                body: "Support M-Pesa, PayPal, Apple Pay, Google Pay, etc."
            },
            {
                title: "Recurring Payments:",
                body: "Enable subscription billing with automated payments."
            },
            {
                title: "QR Code Payments:",
                body: "Allow customers to pay by scanning a QR code."
            },
        ]
    },
    {
        image: "/images/icon-pexi.png",
        name: "Security & Compliance",
        description: [
            {
                title: "Fraud Detection & Prevention:",
                body: "Implement AI-based fraud detection and KYC (Know Your Customer) verification."
            },
            {
                title: "3D Secure Authentication (3DS2):",
                body: "Enhance security for online card payments."
            },
            {
                title: "PCI-DSS Compliance:",
                body: "Ensure secure handling of cardholder data."
            },
            {
                title: "AML & KYC Checks:",
                body: "Prevent money laundering and ensure compliance with regulations."
            },
            {
                title: "Dispute Management:",
                body: "Allow chargeback handling and dispute resolution."
            },
        ]
    },
    {
        image: "/images/icon-pexi.png",
        name: "Merchant & Customer Services",
        description: [
            {
                title: "Merchant Dashboard:",
                body: "A web interface for businesses to track transactions, manage payments, and generate invoices.."
            },
            {
                title: "Customer Portal:",
                body: "Let customers view transaction history and manage payment preferences."
            },
        ]
    },
    {
        image: "/images/icon-pexi.png",
        name: "API & Developer Tools",
        description: [
            {
                title: "RESTful & GraphQL APIs: ",
                body: "Allow seamless integration for merchants and developers."
            },
            {
                title: "SDKs & Plugins:",
                body: "Provide SDKs for JavaScript, Python, TypeScript, and plugins for Shopify, WooCommerce, Magento, etc."
            },
            {
                title: "Webhooks & Notifications:",
                body: "Notify merchants about payment statuses in real time."
            },
        ]
    },
    {
        image: "/images/icon-pexi.png",
        name: "Reporting & Analytics",
        description: [
            {
                title: "Transaction Reports: ",
                body: "Generate daily, weekly, or monthly transaction summaries."
            },
            {
                title: "Business Insights:",
                body: "Provide analytics on sales trends, customer behavior, and payment performance."
            },
            {
                title: "Automated Reconciliation:",
                body: "Match transactions with bank settlements."
            },
        ]
    },
    {
        image: "/images/icon-pexi.png",
        name: "Customer Support",
        description: [
            {
                title: "Live Chat & Ticketing System: ",
                body: "Provide 24/7 support via chat, email, and phone."
            },
            {
                title: "Dispute Resolution Center:",
                body: "Allow customers and merchants to resolve chargebacks and payment issues."
            },
        ]
    },
]

export default function Services() {
    return (
        <section>
            <NavigationBar />
            <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='font-bold text-mainsecondary md:text-4xl text-3xl mb-6'>Our Services</h1>
                    <h1 className='md:text-3xl text-2xl px-6 text-white md:max-w-200 text-center font-thin'>Building a payment processing gateway requires multiple services to ensure security, reliability, and compliance. </h1>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 max-w-7xl mx-auto mt-15 mb-20'>
                {services.map((member, index) => (
                    <div key={index} className="border-1 p-6 rounded-lg mx-6 md:mx-0 hover:bg-mainblue transition-colors hover:text-white">
                        <div className='flex flex-col gap-6 justify-between items-start' >
                            <div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={20}
                                    height={80}
                                    className="mb-4"
                                />
                                <p className="text-xl font-semibold md:text-right text-left pr-4 text-mainsecondary mb-4">{member.name}</p>
                            </div>
                        </div>
                        <p className='text-sm'>{member.description.map((item, index) => (
                            <div key={index} className='flex flex-col md:gap-2 border-b-1 py-2'>
                                <p className='text-sm font-semibold'>{item.title}</p>
                                <p className='text-sm'>{item.body}</p>
                            </div>
                        ))}</p>
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
