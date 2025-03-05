import Choose from '@/components/Choose'
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import NavigationBar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";

const teamMembers = [
    {
        name: "Paul Abuya",
        image: "/images/paul.jpg",
        position: "Chief Executive Officer Pexi Labs Limited",
        description: "Paul is a seasoned fintech leader and the CEO of Pexi Labs Limited, a dynamic payment gateway company dedicated to redefining digital transactions. Backed by a team with deep expertise in the payments industry, Pexi Labs brings innovative, secure, and scalable payment solutions to businesses of all sizes. With vast experience in tech management, Paul has been instrumental in driving technology-driven growth, optimizing operations, and leading high-performing teams in the digital payments space. As a player in the digital payments space, Pexi Labs, foundation is built on industry expertise and a commitment to delivering seamless and reliable payment solutions. Under Paul’s leadership, the company is focused on leveraging cutting-edge technology, fostering strategic partnerships, and ensuring financial inclusion through innovative digital payment systems.",
    },
    {
        name: "Dauglous Omambia",
        image: "/images/douglus.jpg",
        position: "Chief Technology Officer, Pexi Labs Limited",
        description: "Dauglous is a technology leader specializing in Web3 and digital payments. As the CTO of Pexi Labs Limited, he designs and implements secure, scalable, and compliant payment solutions, ensuring seamless integration between backend systems, smart contracts, and frontend applications. With expertise in fintech and blockchain, Dauglous has led the development of Pexi Labs’ Web3 architecture, built and managed high-performing engineering teams, and overseen product execution. He is currently spearheading the creation of a PCI DSS-compliant payment gateway, reinforcing security and compliance in digital transactions. Under his leadership, Pexi Labs is leveraging cutting-edge technology to redefine payment processing, drive financial inclusion, and shape the future of digital transactions.",
    },
    {
        name: "Erick Ayara",
        image: "/images/erick.jpg",
        position: "Product Manager, Pexi Labs Limited",
        description: "Erick is a seasoned Product Development and UX Design Professional with over 10 years of experience in creating user-centered digital products. As the Product Manager at Pexi Labs, Erick specializes in identifying user needs and translating them into meaningful and engaging experiences that drive business value. Erick has experience in designing and building Financial Products, Managed teams in project execution to rollout. Erick’s skills include product strategy, user research, interaction design, and prototyping. Erick also has a passion for creating products that not only solve problems but also delight users which is an added value to Pexi Labs. ",
    },
    {
        name: "Faith Awuor ",
        image: "/images/faith.jpg",
        position: "Marketing Lead, Pexi Labs Limited",
        description: "A focused, dedicated and result oriented payments professional, with a 360 grasp of the dynamic realms of low risk,mid risk and high risk payments. I have hinged my experience in e commerce, forex,betting,Gambling and Igaming. Having had a back ground in remittance I understand and are conversant , able to navigate the complexities of the regulatory landscapes, I have built Payin and Payout models around Banks, Mobile Wallets, and refining that down to APMs in Africa,Asia,Latam, Europe."
    },

];

export default function Team() {
    return (
        <section>
            <NavigationBar />
            <div className='relative w-full h-100 bg-[url("/images/faq.png")] bg-cover bg-center bg-no-repeat'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='font-bold text-mainsecondary md:text-4xl text-3xl mb-6'>Team</h1>
                    <h1 className='md:text-3xl text-2xl px-6 text-white md:max-w-200 text-center font-thin'>We are a fintech company comprised of members with expertise in banking, e-commerce, marketing, and technical spaces, with over 25 years of experience.</h1>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 max-w-7xl mx-auto mt-20'>
                {teamMembers.map((member, index) => (
                    <div key={index} className="border-1 p-6 rounded-lg mx-6 md:mx-0">
                        <div className='flex md:flex-row flex-col gap-6 justify-between md:items-center items-start' >
                            <div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={180}
                                    height={180}
                                    className="mx-auto rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-xl font-semibold mt-4 md:text-right text-left pr-4 ">{member.name}</p>
                                <p className="text-sm font-semibold text-mainsecondary pr-4 text-left md:text-right">{member.position}</p>
                            </div>
                        </div>
                        <p className='mt-6 text-sm'>{member.description}</p>
                    </div>
                ))}
            </div>
            <div className='max-w-7xl mx-auto  px-6 md:px-0'>
            <h1 className='mt-6 -mb-15 font-bold text-3xl'>Why Choose PexiPay?</h1>
            </div>
            
            <Choose/>
            <MainFooter />
            <Footer />
        </section>
    )
}
