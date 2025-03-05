import Choose from '@/components/Choose'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";

const teamMembers = [
    {
        name: "Payment Gateway",
        image: "/images/paul.jpg",
        position: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    {
        name: "Payment Gateway",
        image: "/images/douglus.jpg",
        position: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    {
        name: "Payment Gateway",
        image: "/images/erick.jpg",
        position: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    {
        name: "Payment Gateway",
        image: "/images/faith.jpg",
        position: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    
];

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
            <div className='grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-20'>
                {teamMembers.map((member, index) => (
                    <div key={index} className="border-2 p-6 rounded-lg">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="mx-auto rounded-full"
                        />
                        <p className="text-xl font-semibold mt-4">{member.name}</p>
                        <p className="text-sm">{member.position}</p>
                    </div>
                ))}
            </div>
            <Choose />
            <MainFooter />
            <Footer />
        </section>
    )
}
