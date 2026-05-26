'use client'

import React from 'react'
import Image from 'next/image'

export function CTABanner() {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-[#141414] to-black text-center border-b border-[#242424]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tagline matching Strive */}
          <h2 className="super mb-4 md:mb-6 text-white">Take control of your athletic potential today</h2>
          <p className="body-new mb-8 md:mb-12 max-w-2xl mx-auto">
            Step into a community of dedicated athletes using Rewire to elevate their physical performance.
          </p>

          {/* Centered Store buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
