'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import aiCoachImg from '../../public/images/ai-coach.png'
import mealScannerImg from '../../public/images/meal-scanner.png'
import nutritionDashboardImg from '../../public/images/nutrition-dashboard.png'
import exerciseLibraryImg from '../../public/images/exercise-library.png'
import workoutTrackerImg from '../../public/images/workout-tracker.png'

interface ShowcaseSection {
  tag: string
  title: string
  description: string
  bullets: string[]
  image: any
  alt: string
}

export function AppScreensShowcase() {
  const sections: ShowcaseSection[] = [
    {
      tag: '01 / AI COACH',
      title: 'Your AI Personal Training Coach',
      description: 'Get a personalized training plan and real-time coaching directly in chat. From custom workouts to macro adjustments, your AI coach answers questions, demonstrates form with HD videos, and adjusts your routines dynamically based on your performance.',
      bullets: [
        'Custom workout creation tailored to your exact goal',
        'Instant nutritional guidance and macronutrient tips',
        'Specialized recovery advice including sauna and cold plunge protocols'
      ],
      image: aiCoachImg,
      alt: 'AI Coach screenshot'
    },
    {
      tag: '02 / MEAL SCANNER',
      title: 'Scan Meals in Seconds',
      description: 'Stop logging food line by line. Take a photo of your meal and let our AI scanner instantly calculate calories and macronutrients (carbs, protein, fats). Edit details if needed and save to keep your nutrition on track.',
      bullets: [
        'Instant photo recognition logs entire meals in one tap',
        'Accurate calorie, carb, protein, and fat breakdowns',
        'Adjust quantities and save directly to your daily log'
      ],
      image: mealScannerImg,
      alt: 'Meal Scanner screenshot'
    },
    {
      tag: '03 / NUTRITION DASHBOARD',
      title: 'Dynamic Nutrition Tracking',
      description: 'Monitor your daily caloric goals and macronutrients at a glance. Set custom daily targets, track your progress automatically, and use quick AI logging tools to make sure you never miss a meal.',
      bullets: [
        'Real-time remaining calorie calculations based on active burn',
        'Interactive weekly calendar displaying logging streaks',
        'Macronutrient progress bars for protein, carbs, and fats'
      ],
      image: nutritionDashboardImg,
      alt: 'Nutrition Dashboard screenshot'
    },
    {
      tag: '04 / EXERCISE LIBRARY',
      title: '1000+ Movement Library',
      description: 'Browse and search through a comprehensive collection of exercises. Filter by body parts (back, chest, shoulders, lower arms) and equipment type (barbell, cable, dumbbells) to find the perfect movement for your routine.',
      bullets: [
        'High-quality search indexing with auto-suggestions',
        'Targeted filters for muscle groups and gear',
        'Detailed equipment labels and movement classifications'
      ],
      image: exerciseLibraryImg,
      alt: 'Exercise Library screenshot'
    },
    {
      tag: '05 / WORKOUT TRACKER',
      title: 'Intuitive Active Workout Logger',
      description: 'Track your active sets, weights, and repetitions in real-time. Follow structured step-by-step guides for each movement, record completed sets with a simple checkbox, and flow seamlessly into the next exercise.',
      bullets: [
        'Interactive step-by-step workout screen with instructions',
        'One-tap set checking to log weight and rep completion',
        'Overview tabs showcasing workout history and form guides'
      ],
      image: workoutTrackerImg,
      alt: 'Workout Tracker screenshot'
    }
  ]

  return (
    <section className="py-16 md:py-32 space-y-16 md:space-y-32 max-w-7xl mx-auto px-6 relative overflow-hidden bg-black">
      {/* Ambient background grids/spots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 0
        return (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-20 items-center relative z-10"
          >
            {/* Text details */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
            >
              <span className="text-brand text-xs font-black tracking-widest block uppercase mb-2">
                {sec.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 md:mb-4">
                {sec.title}
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-6">
                {sec.description}
              </p>

              <ul className="space-y-3.5 pt-2">
                {sec.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-brand-dim border border-brand/20 flex items-center justify-center text-brand text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mockup Image Visual */}
            <motion.div
              initial={{
                opacity: 0,
                x: isEven ? 80 : -80,
                rotate: isEven ? 8 : -8,
                scale: 0.85
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 flex justify-center order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                {/* Visual Ambient Light Spot behind the mockup */}
                <div className="absolute inset-0 bg-brand/5 rounded-full blur-[80px] scale-75 pointer-events-none" />

                <div className="relative z-10 transition-transform duration-500 hover:scale-[1.03] hover:rotate-1">
                  <Image
                    src={sec.image}
                    alt={sec.alt}
                    placeholder="blur"
                    className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )
      })}
    </section>
  )
}
