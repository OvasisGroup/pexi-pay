"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Mail: ", email);

    try {
      const response = await fetch("/api/join-mail-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Successfully subscribed to our mailing list!",
          className: "bg-primary text-primary-foreground",
        });
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to subscribe. Please try again.",
          variant: "destructive",
          className: "bg-destructive text-destructive-foreground",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
        className: "bg-destructive text-destructive-foreground",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto bg-mainblue md:rounded-4xl">
      <div className="pt-20 md:pt-0">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/man-bags.png"
              alt="image"
              width={1000}
              height={100}
              className="md:-mt-20 mt-15 px-10 md:px-0"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-4 md:px-16 px-6">
            <h1 className="text-white font-bold text-3xl">
              Join Our Mailing List
            </h1>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-maingreen"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 border bg-mainsecondary border-mainsecondary rounded-md text-white font-bold hover:bg-red-700 focus:outline-none focus:border-mainsecodnary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
