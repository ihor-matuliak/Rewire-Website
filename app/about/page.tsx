'use client'

import React from 'react'

export default function AboutPage() {
  const cards = [
    {
      title: 'Pioneering',
      description: 'Redefining the possibilities of modern sports engineering.'
    },
    {
      title: 'Methodology',
      description: 'Democratizing data-driven training methods for every fitness level.'
    },
    {
      title: 'Connection',
      description: 'Fostering a collaborative ecosystem of athletes growing together.'
    }
  ]

  return (
    <div className="bg-black text-white min-h-screen pb-16 md:pb-12">

      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 text-center py-12 md:py-20 border-b border-[#242424]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Helping athletes unlock their ultimate capabilities
          </h1>
          <p className="body-new max-w-2xl mx-auto text-zinc-400">
            We are a collective of developers, sports researchers, and competitors reimagining the future of athletic tools.
          </p>
        </div>
      </section>

      {/* 2. Our Mission Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-b border-[#242424]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Vision</h2>
          <p className="text-[#8F8F8F] text-lg sm:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
            To build intelligent tools that analyze human physiology, empowering people to optimize their habits and achieve lasting results.
          </p>

          {/* Three Cards Grid */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-8 text-left">
            {cards.map((card, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-white leading-tight">
                  {card.title}
                </h3>
                <p className="text-[#8F8F8F] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
