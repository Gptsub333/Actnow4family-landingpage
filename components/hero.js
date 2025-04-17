"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="bg-[#F0F4F8] min-h-[90vh] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F0F4F8] -z-10"></div>

      {/* Logo watermark - fixed and centered */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className={cn("transition-all duration-1000 ease-out", isLoaded ? "opacity-5" : "opacity-0")}>
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
            <Image
              src="/images/logo-transparent.png"
              alt="ActNow4Family Logo Watermark"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Integrated navigation bar */}
      <div className="container mx-auto px-4 md:px-6 pt-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo - increased size */}
          <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] transition-all duration-300 hover:scale-105">
            <Image
              src="/images/logo-transparent.png"
              alt="ActNow4Family Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>

          {/* Navigation Links - aligned with image below */}
          <div className="hidden md:flex items-center justify-end lg:w-1/2 pr-4 md:pr-6">
            <div className="flex justify-between space-x-6 lg:space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#0C99D5] font-medium transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-[#0C99D5] font-medium transition-colors whitespace-nowrap"
              >
                About Us
              </Link>
              <Link
                href="#conditions"
                className="text-gray-700 hover:text-[#0C99D5] font-medium transition-colors whitespace-nowrap"
              >
                Coverage Plans
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-[#0C99D5] font-medium transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        {/* Main hero content - side by side layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Header text and trust indicators */}
            <div
              className={cn(
                "space-y-6 transition-all duration-700 ease-out delay-100 relative z-10",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Secure Your Family's Future <span className="text-[#0C99D5]">with Confidence</span>
              </h1>

              <p className="text-gray-600 text-lg">
                We provide more than just insurance—we offer peace of mind. Our comprehensive coverage plans protect
                what matters most to you.
              </p>

              {/* Trust indicators */}
              <div className="space-y-4">
                <p className="text-[#0C99D5] font-medium text-xl">Protecting What Matters Most</p>

                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#0C99D5]" />
                    <span className="text-sm font-medium">100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-[#0C99D5]" />
                    <span className="text-sm font-medium">Family First</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#0C99D5]" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#contact"
                  className="bg-[#0C99D5] hover:bg-[#0C99D5]/90 text-white px-6 py-6 h-auto text-base font-medium shadow-md hover:shadow-lg transition-all group rounded-md text-center"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#conditions"
                  className="border border-[#0C99D5] text-[#0C99D5] hover:bg-[#0C99D5]/5 px-6 py-6 h-auto text-base font-medium transition-all rounded-md text-center"
                >
                  Explore Plans
                </Link>

              </div>
            </div>

            {/* Right column - Hero image */}
            <div
              className={cn(
                "relative transition-all duration-700 ease-out delay-300 z-10",
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
              )}
            >
              <div className="relative h-[300px] md:h-[400px] lg:h-[480px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/family-insurance.jpg"
                  alt="Family Protection Insurance"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0C99D5]/30 to-transparent"></div>

                {/* Info card */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-[280px] bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-[#0C99D5] font-bold text-lg">Family Protection Plan</h3>
                      <p className="text-gray-700 text-sm mt-1">
                        Comprehensive coverage designed specifically for families with children
                      </p>
                      <Link href='#conditions'>
                      <div className="mt-3 flex items-center text-sm font-medium text-[#0C99D5]">
                        Learn more <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
