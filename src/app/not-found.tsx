import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mainblue px-6 text-center">
      <Image
        src="/images/pexi_logo.png"
        alt="PexiPay logo"
        width={180}
        height={56}
        className="mb-8 h-auto w-auto"
        priority
      />
      <h1 className="text-9xl font-bold text-white">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">
        Page Not Found
      </h2>
      <p className="text-blue-100 max-w-md mb-8">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button className="bg-red-500 text-white border-red-500 hover:bg-red-800 hover:text-white px-10 py-6 rounded cursor-pointer font-bold">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
