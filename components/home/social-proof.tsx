'use client'

import React from 'react'

export function SocialProof() {
  const cards = [
    {
      title: 'Designed for peak capabilities',
      description: 'Yet the majority of athletes never reach their zenith because they lack the guidance to truly fine-tune their efforts.'
    },
    {
      title: 'Overcome training stagnancy',
      description: 'Move away from one-size-fits-all routines. Access customized insights that drive persistent, weekly improvement.'
    },
    {
      title: 'Evidence-driven outcomes',
      description: 'Our tools are designed using established sports science and rigorous field-tested validation.'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Centered Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-white leading-tight">
            Discover the untapped strength and athletic capacity you are currently missing.
          </h2>

          {/* Three cards layout matching Strive */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
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
      </div>
    </section>
  )
}
