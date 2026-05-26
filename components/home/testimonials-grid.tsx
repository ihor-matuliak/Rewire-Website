'use client'

import React from 'react'

export function TestimonialsGrid() {
  const testimonials = [
    {
      quote: 'Integrating Rewire into my routine has completely elevated my progress. My outcomes are far superior now.',
      author: 'Sarah K.',
      role: 'Crossfit Athlete'
    },
    {
      quote: 'The customized analytics allowed me to smash through lifting stagnation that kept me stuck for seasons.',
      author: 'Mike R.',
      role: 'Powerlifter'
    },
    {
      quote: 'At last, a training assistant designed to optimize both cardiovascular fitness and heavy lifting.',
      author: 'Alex T.',
      role: 'Triathlete'
    }
  ]

  return (
    <section className="py-16 md:py-28 bg-[#141414] border-b border-[#242424]">
      <div className="container mx-auto px-4">
        {/* Title matching Strive's super class */}
        <h2 className="super text-center mb-10 md:mb-16 text-white">Endorsements from the field</h2>
        
        {/* 3 cards grid layout */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <div key={idx} className="card bg-black border border-[#242424]">
              {/* Green quotation mark */}
              <div className="text-[#B0FF00] text-4xl mb-3 leading-none select-none">❝</div>
              <p className="text-white mb-4 md:mb-5 text-sm sm:text-base leading-relaxed">
                {item.quote}
              </p>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">{item.author}</div>
                <div className="text-[#8F8F8F] text-xs font-semibold">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
