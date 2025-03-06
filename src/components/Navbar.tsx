"use client";
import { useState } from "react";
import { Menu, X, ChevronDown} from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "./ui/button";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);


    // Handle language change
    const changeLanguage = (lang: string) => {
        console.log("Language changed to:", lang);
        setLangOpen(false);
    };

    return (
        <nav className="bg-mainprimary  top-0 left-0 right-0 z-10 sticky">
            <div className="max-w-[90%] mx-auto">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                        <Link className='text-2xl font-bold' href='/'>
                            <Image
                                aria-hidden
                                src="/images/pexi_logo.png"
                                alt="Globe icon"
                                width={160}
                                height={16}
                                priority
                            // layout="responsive" 
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center text-white">
                    <Link href="/" className="text-maingreen dark:text-white hover:text-mainsecondary font-semibold">
                            Home
                        </Link>
                        <Link href="/payment_gateway" className="text-maingreen dark:text-white hover:text-mainsecondary">
                            Payment Gateway
                        </Link>
                        <Link href="/about" className="text-maingreen dark:text-white hover:text-mainsecondary">
                            About
                        </Link>
                        <Link href="/services" className="text-maingreen dark:text-white hover:text-mainsecondary">
                            Services
                        </Link>
                        <Link href="/team" className="text-maingreen dark:text-white hover:text-mainsecondary">
                            Team
                        </Link>
                        <Link href="/contacts" className="text-maingreen dark:text-white hover:text-mainsecondary ">
                            Contact Us
                        </Link>

                        <Link href="/signin" className="px-8 py-2 bg-maingreen text-mainyellow rounded-3xl hover:bg-mainyellow hover:text-maingreen font-bold">
                            <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded  sm:mx-0' >Get Started</Button>
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-2 shadow-md">
                    <Link href="/payment_gateway" className="block text-gray-800 dark:text-white hover:text-mainsecondary font-semibold">
                        Home 
                    </Link>
                    <Link href="/payment_gateway" className="block text-gray-800 dark:text-white hover:text-mainsecondary font-semibold">
                        Payment Gateway
                    </Link>
                    <Link href="/about" className="block text-gray-800 dark:text-white hover:text-mainsecondary font-semibold">
                        About
                    </Link>
                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-mainsecondary font-semibold">
                        Services
                    </Link>
                    <Link href="/team" className="block text-gray-800 dark:text-white hover:text-mainsecondary font-semibold">
                        Team
                    </Link>
                    <Link href="/contacts" className="block text-gray-800 dark:text-white hover:text-mainsecondary font-semibold">
                        Contact Us
                    </Link>
                    <Link href="/signin" className="block px-4 py-2 text-center bg-mainsecondary text-white rounded-lg hover:bg-red-700 mt-2">
                        Get Started
                    </Link>

                </div>
            )}
        </nav>

    );
};

export default NavigationBar;
