import React from 'react'
import Image from "next/image";

const teamMembers = [
    {
        name: "Payment Gateway",
        image: "/images/SVG/payment_gateway.svg",
        description: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    {
        name: "Payment processing for iGaming",
        image: "/images/SVG/igaming.svg",
        description: "Experienced full-stack developer building modern web apps and blockchain solutions.",
    },
    // {
    //     name: "Alternative payments methods",
    //     image: "/images/pavin.png",
    //     description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    // },
    // {
    //     name: "Open Banking",
    //     image: "/images/pavin.png",
    //     description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    // },
    // {
    //     name: "Real – time reporting & Analytics",
    //     image: "/images/pavin.png",
    //     description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    // },
    // {
    //     name: "Smart transaction Routing",
    //     image: "/images/pavin.png",
    //     description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    // },
    // {
    //     name: "Fraud & Chargeback prevention",
    //     image: "/images/pavin.png",
    //     description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    // },
    // {
    //     name: "Payment processing for iGaming",
    //     image: "/images/pavin.png",
    //     description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    // },
    
];

export default function Introduction() {
    return (
        <section>
        <div className="max-w-7xl mx-auto">
            <div className='grid-cols-2 gap-y-10 gap-x-8 py-16 md:grid'>
                <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
                    <small className='text-mainsecondary font-bold text-xl'>PEXIPAY KEY FEATURES</small>
                    <h1 className='font-bold text-mainblue text-4xl my-3'>We deliver outstanding results while streamlining your processes.</h1>
                    <p>We deliver outstanding results while streamlining your processes. Our goal is to maximize efficiency and ensure you achieve the best outcomes with minimal effort and expense.</p>
                </div>
                <div className='flex flex-row'>
                {teamMembers.map((member, index) => (
                        <div key={index} className="bg-maingrey rounded-lg px-4 py-10 m-4 flex flex-col justify-center items-center">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={80}
                                height={80}
                                className="mx-auto"
                            />
                            <p className="text-xl font-semibold mt-4">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
}
