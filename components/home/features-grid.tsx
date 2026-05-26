'use client'

import React from 'react'

export function FeaturesGrid() {
  const leftColPoints = [
    {
      num: 1,
      title: 'Comprehensive AI Physical Assessment',
      description: 'Begin with a full evaluation of your metrics, fitness history, and lifestyle goals. Our AI builds a personalized profile to guide your fitness journey.'
    },
    {
      num: 2,
      title: 'Customized Fitness Regimens',
      description: 'Receive a tailored workout schedule featuring strength, cardio, and recovery sessions. The AI adjusts your workouts dynamically according to your progress and current energy.'
    },
    {
      num: 3,
      title: 'Expansive Exercise Directory',
      description: 'Explore over a thousand exercises complete with HD tutorials, form cues, and scaling options. Find everything from beginner bodyweight moves to complex lifts.'
    },
    {
      num: 4,
      title: 'Detailed Analytics & Logs',
      description: 'Record training sessions, chart your improvements, and visualize your gains over time. Keep tabs on strength metrics and physical changes effortlessly.'
    }
  ]

  const rightColPoints = [
    {
      num: 5,
      title: 'Social Groups & Challenges',
      description: 'Connect with a motivating network of like-minded athletes. Join regular challenges, showcase achievements, and inspire one another.'
    },
    {
      num: 6,
      title: 'Wellness & Recovery Coaching',
      description: 'Unlock specialized guides for mobility, recovery techniques, and sleep optimization. Support your physical well-being through a complete lifestyle approach.'
    },
    {
      num: 7,
      title: 'Adaptive AI Coach',
      description: 'Get instant feedback, rest recommendations, and coaching cues on the fly. Your plan adjusts daily based on your body\'s recovery state and goals.'
    },
    {
      num: 8,
      title: 'Gamified Achievements',
      description: 'Turn fitness into an adventure with a gamified tracking experience. Earn badges, unlock routines, and level up as you hit major benchmarks.'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-[#141414] border-t border-b border-[#242424]">
      <div className="container mx-auto px-4">
        {/* Title matching Strive's centered super heading */}
        <h2 className="super text-center mb-10 md:mb-16 text-white">The Rewire Experience</h2>
        
        {/* Two columns layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column (1-4) */}
          <div className="space-y-8 md:space-y-12">
            {leftColPoints.map((point) => (
              <div key={point.num} className="flex gap-4 sm:gap-6">
                <div className="text-[#B0FF00] text-3xl sm:text-4xl font-bold font-sans">
                  {point.num}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-white leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-[#8F8F8F] text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (5-8) */}
          <div className="space-y-8 md:space-y-12">
            {rightColPoints.map((point) => (
              <div key={point.num} className="flex gap-4 sm:gap-6">
                <div className="text-[#B0FF00] text-3xl sm:text-4xl font-bold font-sans">
                  {point.num}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 text-white leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-[#8F8F8F] text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
