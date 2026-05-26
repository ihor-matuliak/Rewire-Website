'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <div className="relative w-full bg-[#141414] border-b border-[#242424] z-50">
        <div className="container mx-auto px-4 py-3 relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white font-bold text-lg cursor-pointer"
            aria-label="Close promotion"
          >
            ×
          </button>
          
          <Link href="/contact" className="flex items-center justify-center sm:justify-start gap-4 pr-8">
            {/* Logo icon */}
            <div className="w-8 h-8 rounded-lg bg-[#B0FF00] flex items-center justify-center font-black text-black text-xs shrink-0">
              R
            </div>
            
            {/* Info details */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-left">
              <div>
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-none">
                  Rewire Fitness App
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                  Begin your physical evolution today
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xs leading-none">★★★★★</span>
                <span className="text-[#B0FF00] text-[10px] font-black uppercase tracking-wider leading-none">
                  Early Access
                </span>
              </div>
            </div>
            
            {/* Try Free Action */}
            <div className="ml-auto hidden sm:block">
              <span className="bg-zinc-800 text-white hover:bg-zinc-700 text-xs font-bold px-4 py-1.5 rounded-full transition-colors border border-[#242424]">
                Try Free
              </span>
            </div>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  )
}
