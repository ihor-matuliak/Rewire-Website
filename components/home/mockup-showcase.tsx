'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  WorkoutMockup,
  CalorieMockup,
  AnalyticsMockup,
  HabitMockup
} from '@/components/ui/mockups'

interface ShowcaseSection {
  tag: string
  title: string
  description: string
  bullets: string[]
  mockup: React.ReactNode
}

export function MockupShowcase() {
  const sections: ShowcaseSection[] = [
    {
      tag: '01 / WORKOUTS',
      title: 'Workout Logging Re-Imagined',
      description: 'Your training log shouldn’t feel like an Excel spreadsheet. Rewire gives you a terminal-grade cockpit to record weights, tracks rest times passively, and computes volume load calculations.',
      bullets: [
        'Automatic plate calculator so you spend less time doing math',
        'Smart resting timer that alerts your watch when to lift',
        'Dynamic sets adjuster that matches your current muscular fatigue'
      ],
      mockup: <WorkoutMockup />
    },
    {
      tag: '02 / NUTRITION',
      title: 'Macros and Calories. In Sync.',
      description: 'Stop guessing what you eat. Log meals instantly with our AI camera, map protein targets, and watch your nutrition stats balance dynamically against your active caloric burn.',
      bullets: [
        'AI recognition scans photos of foods to log calories instantly',
        'Live synchronization with Apple Health active calories data',
        'Precise macronutrient progress wheels tracking grams and percentages'
      ],
      mockup: <CalorieMockup />
    },
    {
      tag: '03 / BIOMETRICS',
      title: 'Deep Performance Analytics',
      description: 'Uncover training bottlenecks. Compare volume loads and calorie deficits alongside sleep duration and heart rate variability (HRV) metrics to prevent overtraining.',
      bullets: [
        'Weekly fatigue indices comparing total volume load curves',
        'Automatic tracking of personal records (PRs) across 80+ movements',
        'HRV correlations checking sleep efficiency against exercise strength'
      ],
      mockup: <AnalyticsMockup />
    },
    {
      tag: '04 / HABITS',
      title: 'Streak Building & Habits',
      description: 'Results don’t happen overnight; they are the sum of daily routines. Standardize your recovery, hydration, and meal times into tracking checklists and visualize consistency grids.',
      bullets: [
        'Interactive calendar maps displaying daily consistency profiles',
        'Gamified leveling systems that unlock custom app cards',
        'Configurable reminders to log weights, sleep, and meals'
      ],
      mockup: <HabitMockup />
    }
  ]

  return (
    <section className="py-16 space-y-32 max-w-7xl mx-auto px-6 relative bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.015] to-transparent pointer-events-none" />

      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 0
        return (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            {/* Text details */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`lg:col-span-6 space-y-6 ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <span className="text-brand text-xs font-black tracking-widest block uppercase">
                {sec.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {sec.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {sec.description}
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {sec.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-dim/40 border border-brand/20 flex items-center justify-center text-brand text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Live Interactive Mockup Visual */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`lg:col-span-6 flex justify-center ${
                isEven ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <div className="relative w-full max-w-sm">
                {/* Visual Ambient Light Spot behind the mockup */}
                <div className="absolute inset-0 bg-brand/5 rounded-full blur-[80px] scale-75 pointer-events-none" />
                <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
                  {sec.mockup}
                </div>
              </div>
            </motion.div>
          </div>
        )
      })}
    </section>
  )
}
