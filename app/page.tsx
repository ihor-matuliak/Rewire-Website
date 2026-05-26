import React from 'react'
import { PromoBanner } from '@/components/home/promo-banner'
import { Hero } from '@/components/home/hero'
import { SocialProof } from '@/components/home/social-proof'
import { AppScreensShowcase } from '@/components/home/app-screens-showcase'
import { FeaturesGrid } from '@/components/home/features-grid'
import { AppsIntegration } from '@/components/home/apps-integration'
import { TestimonialsGrid } from '@/components/home/testimonials-grid'
import { FAQ } from '@/components/home/faq'
import { CTABanner } from '@/components/home/cta-banner'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black text-white">
      {/* 1. Sticky/Dismissible Promo Banner */}
      <PromoBanner />
      
      {/* 2. Hero Section (Centered titles, Store Badges, Triple iPhone Mockups, Purple glow) */}
      <Hero />
      
      {/* 3. Section 2 (Leaving potential on the table cards grid) */}
      <SocialProof />
      
      {/* App Screens Showcase with Alternating Phone Mockups */}
      <AppScreensShowcase />
      
      {/* 4. Section 3 (How Rewire Works bg-[#141414]) */}
      <FeaturesGrid />
      
      {/* 5. Section 4 (Works with your favorite apps) */}
      <AppsIntegration />
      
      {/* 6. Section 5 (What athletes are saying bg-[#141414]) */}
      <TestimonialsGrid />
      
      {/* 7. Section 6 (FAQ) */}
      <FAQ />
      
      {/* 8. Section 7 (CTA Banner from-[#141414] to black) */}
      <CTABanner />
    </div>
  )
}
