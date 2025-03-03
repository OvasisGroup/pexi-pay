"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, Settings, User } from "lucide-react";
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
        <nav className="bg-transparent dark:border-gray-700  top-0 left-0 right-0 z-10  absolute">
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
                        <Link href="/" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Home
                        </Link>
                        <Link href="/about" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Jobs
                        </Link>
                        <Link href="/services" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Services
                        </Link>
                        <Link href="/contact" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Premium
                        </Link>

                       

                        {/* User Profile Dropdown */}

                            <div className="relative">
                                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
                                   Services
                                    <ChevronDown size={16} className="text-white dark:text-white" />
                                </button>
                                {profileOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg">
                                        <Link href="/profile" className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-black">
                                            <User size={16} className="mr-2 text-black" /> Profile
                                        </Link>
                                        <Link href="/settings" className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-black">
                                            <Settings size={16} className="mr-2" /> Settings
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
                        Home
                    </Link>
                    <Link href="/about" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        About
                    </Link>
                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Services
                    </Link>
                    <Link href="/contact" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Contact
                    </Link>

                    {/* Language Dropdown for Mobile */}
                    <div>
                        <button onClick={() => setLangOpen(!langOpen)} className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left">
                            Services <ChevronDown size={16} className="ml-1 inline" />
                        </button>
                        {langOpen && (
                            <div className="pl-4">
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("en")}>
                                    English
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("fr")}>
                                    French
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Spanish
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
