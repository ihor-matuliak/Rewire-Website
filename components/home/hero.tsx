'use client'

import React from 'react'
import Image from 'next/image'
import { TripleMockup } from '@/components/ui/mockups'

export function Hero() {
  return (
    <section className="pt-16 pb-[100px] md:pt-28 md:pb-20 relative  bg-black text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Headings matching Strive classes */}
          <h1 className="super mb-5 text-white font-extrabold tracking-tight">
            The driving force behind your absolute best performance.
          </h1>
          <p className="body-new mb-6 md:mb-8 max-w-2xl mx-auto">
            Rewire helps you optimize your athletic training, boost daily stamina, and easily unlock your peak physical capabilities.
          </p>

          {/* Centered App Badges */}
          <div className="flex sm:flex-row justify-center items-center gap-4 mb-[80px] md:mb-[160px] relative z-10">
            {/* App Store button */}
            <a
              href="#"
              className="inline-block transition hover:opacity-80"
              aria-label="Download on App Store"
            >
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on App Store"
                width={180}
                height={60}
                className="h-[60px] w-auto"
                priority
              />
            </a>

            {/* Google Play button */}
            <a
              href="#"
              className="inline-block transition hover:opacity-80"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/images/google-play-badge.webp"
                alt="Get it on Google Play"
                width={208}
                height={80}
                className="h-[80px] w-auto"
                priority
              />
            </a>
          </div>

          {/* Centered Mockup Layout wrapper */}
          <div className="relative w-full max-w-4xl mx-auto mb-4 md:mb-8 pt-8 md:pt-8">
            <TripleMockup />
          </div>

        </div>
      </div>

      {/* Background Glow as seen on Strive */}
      <div className="hero-gradient-bg" />
    </section>
  )
}
