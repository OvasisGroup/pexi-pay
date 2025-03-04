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
                            Payment Gateway
                        </Link>
                        <Link href="/about" className="text-maingreen dark:text-white hover:text-mainsecondary font-semibold">
                            About
                        </Link>

                        <Link href="/contact" className="text-maingreen dark:text-white hover:text-mainsecondary font-semibold">
                            Contact Us
                        </Link>

                        {/* User Profile Dropdown */}

                        <div className="relative">
                            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
                                Services
                                <ChevronDown size={16} className="text-white dark:text-white" />
                            </button>
                            {profileOpen && (
                                <div className="absolute right-0  p-10 mt-2 w-120 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg">
                                    <Link href="/" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        High-Risk Credit Card processing
                                    </Link>
                                    <Link href="/about" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        Open Banking
                                    </Link>
                                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        Alternative payments methods
                                    </Link>
                                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        Real – time reporting & Analytics
                                    </Link>
                                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        Smart transaction Routing
                                    </Link>
                                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        Payment processing for iGaming
                                    </Link>
                                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-red-700 hover:font-bold border-b-2 py-2">
                                        Fraud & Chargeback Prevention
                                    </Link>

                                </div>
                            )}
                        </div>

                        <Link href="/signin" className="px-8 py-2 bg-maingreen text-mainyellow rounded-3xl hover:bg-mainyellow hover:text-maingreen font-bold">
                            <Button className='bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-6 py-5 rounded-full  sm:mx-0' >Get Started</Button>
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
                    <Link href="/" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Payment Gateway
                    </Link>
                    <Link href="/about" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        About
                    </Link>
                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Contact Us
                    </Link>

                    {/* Language Dropdown for Mobile */}
                    <div>
                        <button onClick={() => setLangOpen(!langOpen)} className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left">
                            Services <ChevronDown size={16} className="ml-1 inline" />
                        </button>
                        {langOpen && (
                            <div className="pl-4">
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("en")}>
                                    <ChevronDown size={16} className="ml-1 inline" />High-Risk Credit Card processing
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("fr")}>
                                    Open Banking
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Alternative payments methods
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Real – time reporting & Analytics
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Smart transaction Routing
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Payment processing for iGaming
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Fraud & Chargeback Prevention
                                </button>
                            </div>
                        )}
                    </div>

                    <Link href="/signin" className="block px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-2">
                        Get Started
                    </Link>

                </div>
            )}
        </nav>

    );
};

export default NavigationBar;
