'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CalorieMockup, WorkoutMockup, AnalyticsMockup } from '@/components/ui/mockups'

interface FeatureDetail {
  title: string
  subtitle: string
  description: string
  benefits: string[]
  visual: React.ReactNode
}

export default function FeaturesPage() {
  const details: FeatureDetail[] = [
    {
      title: 'AI-Driven Nutrition Tracker',
      subtitle: 'MACRONUTRIENT SCAN',
      description: 'No more searching databases or scanning barcodes. Snap a picture of your plate, and our advanced vision AI estimates your calories and macros in seconds.',
      benefits: [
        'Recognizes complex multi-ingredient dishes',
        'Automatic estimation of weight and portions',
        'Tracks macro breakdowns: protein, carbs, fats',
        'Logs historical calorie intake curves'
      ],
      visual: <CalorieMockup />
    },
    {
      title: 'Seamless Training Logger',
      subtitle: 'ATHLETIC CONDITIONING',
      description: 'Ditch the complicated spreadsheets. Easily log your reps, track rest intervals, and update weights directly on your mobile interface.',
      benefits: [
        'Pre-loaded library with over 800 exercise videos',
        'Adaptive overloading recommendations based on past volume',
        'Detailed plate calculator matching your gym equipment',
        'Supports offline caching for gyms with low signal'
      ],
      visual: <WorkoutMockup />
    },
    {
      title: 'Wearable Biometric Insights',
      subtitle: 'PHYSIOLOGICAL ANALYTICS',
      description: 'Integrate sleep metrics, heart rate trends, and HRV to gauge how your body handles physical strain and adapt your workouts accordingly.',
      benefits: [
        'Passive background syncing with Apple Health & Garmin',
        'Correlates nutrition deficits with sleep scores',
        'Calculates a daily readiness score to guide lifting weight',
        'Identifies overtraining indices to prevent injury'
      ],
      visual: <AnalyticsMockup />
    }
  ]

  return (
    <div className="bg-dark-bg text-white bg-grid-pattern min-h-screen pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-12 md:pb-20 space-y-20 md:space-y-32">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-brand text-xs font-black tracking-widest uppercase bg-brand-dim/30 border border-brand/20 px-3.5 py-1.5 rounded-full mb-3 md:mb-4 inline-block">
            Innovative Functions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-4 md:mb-5">
            Built for <br />
            <span className="text-gradient-neon">maximum capability.</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Discover the powerful modules built to aggregate your diet, workout logs, sleep patterns, and daily habits into a cohesive dashboard.
          </p>
        </div>

        {/* Feature Blocks Showcase */}
        <div className="space-y-20 md:space-y-32 pt-8 md:pt-12">
          {details.map((item, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-brand/5 rounded-full blur-[80px] scale-75 pointer-events-none" />
                    <div className="relative z-10">
                      {item.visual}
                    </div>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <span className="text-brand text-xs font-black tracking-widest uppercase mb-2 inline-block">
                    {item.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 md:mb-4">
                    {item.title}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {item.benefits.map((benefit, bIdx) => (
                      <Card key={bIdx} glow={false} className="p-4 border border-zinc-900 bg-zinc-950/20">
                        <span className="text-brand text-xs font-bold block mb-1">✓</span>
                        <p className="text-zinc-300 text-xs font-medium leading-relaxed">
                          {benefit}
                        </p>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Smallwatch and Sensor Sync details */}
        <div className="pt-16 md:pt-24 border-t border-zinc-900/60 text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Designed to connect with your favorite gear.
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Retrieve heart rate data, workout files, sleep scores, and HRV trends passively from Oura, Whoop, Apple Watch, Garmin, and Fitbit.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {['Apple Health', 'Whoop Strap', 'Garmin Connect', 'Strava Sync'].map((sensor) => (
              <div key={sensor} className="bg-zinc-950/40 border border-zinc-900 rounded-2xl py-6 px-4">
                <span className="text-zinc-400 text-xs font-bold block mb-1">SENSOR READY</span>
                <h4 className="text-white text-sm font-black">{sensor}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
