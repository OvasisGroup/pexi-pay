import React from 'react'
// import Image from "next/image";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { GoShieldCheck } from "react-icons/go";
import { VscServerProcess } from "react-icons/vsc";


const teamMembers = [
    {
        name: "Payment Gateway",
        image: <RiSecurePaymentLine  size={60} className='text-mainsecondary' />,
        description: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    {
        name: "Card processing",
        image: <VscServerProcess size={60} className='text-mainsecondary' />,
        description: "Experienced full-stack developer building modern web apps and blockchain solutions.",
    },
    {
        name: "Alternative payments methods",
        image: <MdOutlinePayments size={60} className='text-mainsecondary' />,
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    },
    {
        name: "Open Banking",
        image: <BsBank size={60} className='text-mainsecondary' />,
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    },
    {
        name: "Real – time reporting & Analytics",
        image: <MdOutlineAnalytics size={60} className='text-mainsecondary' />,
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    },
    {
        name: "Smart transaction Routing",
        image: <AiOutlineTransaction size={60} className='text-mainsecondary' />,
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    },
    {
        name: "Fraud & Chargeback prevention",
        image: <GoShieldCheck size={60} className='text-mainsecondary' />,
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    },
    {
        name: "Payment processing for online businesses",
        image: <GrGamepad size={60} className='text-mainsecondary' />,
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    },
    
];

export default function Introduction() {
    return (
        <section>
        <div className="max-w-7xl mx-auto my-12">
            <div className='flex-cols gap-y-10 gap-x-8 py-16 md:grid'>
                <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
                    <p className='text-mainsecondary font-semibold'>PEXIPAY KEY FEATURES</p>
                    <h1 className='font-bold text-mainblue text-4xl my-1 px-6 md:px-0'>We deliver outstanding results while streamlining your processes.</h1>
                    <p className='px-6 md:px-0'>We deliver outstanding results while streamlining your processes. Our goal is to maximize efficiency and ensure you achieve the best outcomes with minimal effort and expense.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 p-6 md:p-0'>
                {teamMembers.map((member, index) => (
                        <div key={index} className="bg-maingrey rounded-lg hover:bg-mainblue transition-colors hover:text-white flex flex-col justify-center items-center min-h-60 p-10 text-center">
                            <div>{member.image}</div>
                            <p className="  mt-4">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
}
