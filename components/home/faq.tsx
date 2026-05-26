'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'How does the AI Meal Scanner work?',
      answer: 'Our AI Meal Scanner uses vision-based deep learning. By snapping a photo of your food, our API analyzes volume, textures, and ingredients to estimate caloric counts and macromutations (Protein, Carbs, Fats) with over 88% accuracy. You can manually adjust values if needed.'
    },
    {
      question: 'Can I sync multiple wearable devices simultaneously?',
      answer: 'Yes, Rewire integrates with multiple ecosystems. You can connect your Apple Watch via Apple Health, alongside Oura and Strava syncs. Our platform aggregates heart rate variability, workout duration, and sleep quality to compute recovery indices.'
    },
    {
      question: 'Does Rewire support custom exercises and training plans?',
      answer: 'Absolutely. While we provide 100+ preset routines, you can build your own custom workouts. Create proprietary movements, configure fixed rest guidelines, and map progressive overload routines (e.g. increase weight automatically if reps goal is met).'
    },
    {
      question: 'Is there an offline mode for recording workouts at the gym?',
      answer: 'Yes, our workout logger runs locally first. If you lose cellular connection in a gym basement, the app stores logs on your device. Once you re-establish internet, your sessions auto-sync to the cloud without losing data.'
    },
    {
      question: 'Can I export my nutrition and workout history?',
      answer: 'Yes, you own your data. At any time, you can export your historical training logs and macro data as CSV or JSON files. Go to Settings > Account > Export Data.'
    }
  ]

  function toggleIndex(idx: number) {
    if (activeIndex === idx) {
      setActiveIndex(null)
    } else {
      setActiveIndex(idx)
    }
  }

  return (
    <section className="py-16 md:py-28 bg-[#141414] border-b border-[#242424]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header section matching Strive text styles */}
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="body-new max-w-2xl mx-auto">
            Find responses regarding our integrations, AI tracking capabilities, and subscription plans.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx
            return (
              <div
                key={idx}
                className="border border-[#242424] bg-black rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-bold text-white text-sm sm:text-base cursor-pointer focus:outline-none hover:bg-zinc-900/30 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`text-[#B0FF00] text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-[#242424]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
