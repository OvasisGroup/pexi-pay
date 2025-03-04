"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import MainFooter from "@/components/MainFooter";
import NavigationBar from "@/components/Navbar";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Get all error messages that are not empty
      const errorMessages = Object.entries(errors)
        .filter(([_, message]) => message !== "")
        .map(
          ([field, message]) =>
            `${field.charAt(0).toUpperCase() + field.slice(1)}: ${message}`
        );

      // Ensure we have error messages to display
      if (errorMessages.length > 0) {
        toast({
          title: "Validation Error",
          description: errorMessages.join("\n"),
          variant: "destructive",
          duration: 5000,
        });
      } else {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields",
          variant: "destructive",
          duration: 5000,
        });
      }
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Contact Form Submission from ${formData.company}`,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Company: ${formData.company}
            Message: ${formData.message}
          `,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debug log

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully",
          duration: 5000,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        console.log("Error Response:", data); // Debug log
        const errorMessage =
          data?.message ||
          data?.error ||
          "We couldn't send your message. Please try again later.";
        toast({
          title: "Oops! Something went wrong",
          description: errorMessage,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Caught Error:", error); // Debug log
      toast({
        title: "Oops! Something went wrong",
        description:
          "We couldn't send your message. Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <NavigationBar />
      <div className="relative w-full h-60 bg-[url('/images/faq.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full">
          <Link href={"/"}>
            <p className="text-white">
              <span>
                <IoHomeOutline size={20} className="text-white mb-4" />
              </span>
              /home/
            </p>
          </Link>
          <h1 className="font-bold text-white sm:text-3xl text-xl">Contacts</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 my-16 px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image
            src="/images/pexi-dark.png"
            alt="image"
            width={150}
            height={100}
            className="mb-6"
          />
          <p className="font-bold text-xl md:pr-40 px-6 md:px-0 text-center md:text-left">
            We tap into modern payment methods that help your business grow. We
            help you accept global debit and credit card payments for all card
            brands and local payment methods.{" "}
          </p>
          <p className="mt-10">info@pexipay.com</p>
          <p>For any questions</p>
        </div>
        <div className="flex flex-col items-center md:flex md:items-start mt-4 gap-4">
          <h1 className="font-bold text-mainblue text-2xl">Work With Us</h1>
          <p>Fill out the form below to get in touch with us.</p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-maingreen`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-maingreen`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-maingreen`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-maingreen`}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className={`w-full px-4 py-2 bg-white border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-maingreen`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Link href="signin">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 border bg-mainsecondary border-mainsecondary rounded-md text-white font-bold hover:bg-red-700 focus:outline-none focus:border-mainsecodnary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Get Started"}
              </button>
            </Link>
          </form>
        </div>
      </div>
      <About />
      <MainFooter />
      <Footer />
    </section>
  );
}
