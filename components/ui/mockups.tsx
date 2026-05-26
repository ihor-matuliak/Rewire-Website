'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import mealScannerImg from '../../public/images/meal-scanner.png'
import exerciseLibraryImg from '../../public/images/exercise-library.png'
import nutritionDashboardImg from '../../public/images/nutrition-dashboard.png'


// 1. Calorie & Macro Mockup
export function CalorieMockup() {
  const macros = [
    { label: 'Protein', current: 145, target: 180, color: 'bg-[#B0FF00]' },
    { label: 'Carbs', current: 185, target: 240, color: 'bg-zinc-300' },
    { label: 'Fats', current: 62, target: 80, color: 'bg-zinc-600' }
  ]

  return (
    <div className="bg-[#141414] border border-[#242424] rounded-[2rem] p-6 relative w-[260px] sm:w-[280px] shadow-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Nutrition</span>
          <h4 className="text-white font-extrabold text-sm">Macros Plan</h4>
        </div>
        <span className="text-[#B0FF00] text-[10px] font-bold uppercase tracking-wider bg-[#B0FF00]/10 px-2 py-0.5 rounded border border-[#B0FF00]/20">
          92%
        </span>
      </div>

      <div className="flex flex-col items-center mb-6">
        {/* Calorie Ring */}
        <div className="relative flex items-center justify-center w-28 h-28 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="56" cy="56" r="46" className="stroke-zinc-800" strokeWidth="8" fill="transparent" />
            <motion.circle
              cx="56"
              cy="56"
              r="46"
              className="stroke-[#B0FF00]"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 46}
              initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 46 * (1 - 1840 / 2200) }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-xl font-black text-white">1,840</span>
            <span className="block text-[8px] text-zinc-500 font-bold uppercase">/ 2,200 kcal</span>
          </div>
        </div>

        {/* Macro Progress Bars */}
        <div className="w-full space-y-3">
          {macros.map((macro, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-[10px] font-bold mb-1">
                <span className="text-zinc-400">{macro.label}</span>
                <span className="text-white">{macro.current}g <span className="text-zinc-500">/ {macro.target}g</span></span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${macro.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(macro.current / macro.target) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#242424] pt-3 flex justify-between items-center text-[10px] font-bold">
        <span className="text-zinc-500 uppercase">Water Goal</span>
        <span className="text-zinc-300">2.4L / 3.0L</span>
      </div>
    </div>
  )
}

// 2. Workout Log Mockup (Center layout)
export function WorkoutMockup() {
  const exercises = [
    { name: 'Barbell Bench Press', sets: ['100kg x 8', '100kg x 8'], checked: [true, true] },
    { name: 'Incline Dumbbell Press', sets: ['34kg x 10', '34kg x 8'], checked: [true, false] },
    { name: 'Cable Chest Fly', sets: ['25kg x 12'], checked: [true] }
  ]

  return (
    <div className="bg-[#141414] border border-[#242424] rounded-[2rem] p-6 relative w-[260px] sm:w-[280px] shadow-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Active Log</span>
          <h4 className="text-white font-extrabold text-sm">Push Workout</h4>
        </div>
        <div className="text-right">
          <span className="block text-[8px] text-[#B0FF00] font-black animate-pulse-slow">● LOGGING</span>
          <span className="text-[10px] text-zinc-500 font-bold">00:42:15</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {exercises.map((exercise, exIdx) => (
          <div key={exIdx} className="border-b border-[#242424] pb-3 last:border-0 last:pb-0">
            <h5 className="text-white text-xs font-bold mb-2">{exercise.name}</h5>
            <div className="flex flex-wrap gap-1.5">
              {exercise.sets.map((set, setIdx) => (
                <div
                  key={setIdx}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded border text-[10px] font-semibold transition-all ${exercise.checked[setIdx]
                    ? 'bg-[#B0FF00]/10 border-[#B0FF00]/30 text-[#B0FF00]'
                    : 'bg-zinc-900 border-[#242424] text-zinc-500'
                    }`}
                >
                  <span className="opacity-80">{setIdx + 1}</span>
                  <span>{set}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-[#242424] rounded-xl p-2.5 flex justify-between items-center text-[10px] font-bold">
        <span className="text-zinc-500 uppercase">Heart Rate</span>
        <span className="text-white flex items-center gap-1">
          <span className="text-[#B0FF00] animate-pulse">❤</span>
          142 bpm
        </span>
      </div>
    </div>
  )
}

// 3. Progress Analytics Mockup
export function AnalyticsMockup() {
  const chartData = [45, 60, 50, 78, 70, 85, 95]
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  return (
    <div className="bg-[#141414] border border-[#242424] rounded-[2rem] p-6 relative w-[260px] sm:w-[280px] shadow-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Analytics</span>
          <h4 className="text-white font-extrabold text-sm">Weekly Progress</h4>
        </div>
        <span className="text-zinc-400 text-[9px] font-bold uppercase bg-zinc-900 px-2 py-0.5 rounded border border-[#242424]">
          Week
        </span>
      </div>

      {/* Bar Chart */}
      <div className="h-28 flex items-end justify-between gap-2.5 mb-6 px-1">
        {chartData.map((val, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full bg-zinc-900 rounded-t h-20 relative overflow-hidden border border-[#242424]">
              <motion.div
                className={`w-full absolute bottom-0 left-0 rounded-t ${idx === 5 || idx === 6 ? 'bg-[#B0FF00]' : 'bg-zinc-700'
                  }`}
                initial={{ height: 0 }}
                whileInView={{ height: `${val}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.08, ease: 'easeOut' }}
              />
            </div>
            <span className="text-[8px] text-zinc-500 font-bold">{labels[idx]}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-[#242424] pt-3">
        <div>
          <span className="text-zinc-500 text-[8px] font-bold uppercase block">Lifts Volume</span>
          <span className="text-white font-black text-xs">24.5k kg</span>
          <span className="text-[#B0FF00] text-[8px] font-black block mt-0.5">↑ 12%</span>
        </div>
        <div>
          <span className="text-zinc-500 text-[8px] font-bold uppercase block">Consistency</span>
          <span className="text-white font-black text-xs">96.4%</span>
          <span className="text-[#B0FF00] text-[8px] font-black block mt-0.5">↑ 4.2%</span>
        </div>
      </div>
    </div>
  )
}

// 4. Habit Streak Mockup
export function HabitMockup() {
  const days = Array.from({ length: 21 }, (_, i) => ({
    day: i + 1,
    completed: [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20].includes(i + 1),
    active: i + 1 === 20
  }))

  return (
    <div className="bg-[#141414] border border-[#242424] rounded-[2rem] p-6 relative w-[260px] sm:w-[280px] shadow-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Habits</span>
          <h4 className="text-white font-extrabold text-sm">Streaks Tracker</h4>
        </div>
        <div className="flex items-center gap-1 bg-[#B0FF00]/10 border border-[#B0FF00]/20 px-2 py-0.5 rounded-full">
          <span className="text-xs">🔥</span>
          <span className="text-white text-[9px] font-black">12 Days</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center p-2 bg-zinc-900/60 rounded-xl border border-[#242424] text-[10px] font-bold">
          <span className="text-white">✓ 60m Training</span>
          <span className="text-[#B0FF00]">12d</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-zinc-900/60 rounded-xl border border-[#242424] text-[10px] font-bold">
          <span className="text-white">✓ Log Meals</span>
          <span className="text-[#B0FF00]">15d</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-zinc-500 text-[8px] font-bold uppercase">Consistency Map</span>
          <span className="text-zinc-400 text-[8px] font-bold">May</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((item, idx) => (
            <div
              key={idx}
              className={`aspect-square rounded flex items-center justify-center text-[8px] font-black border ${item.completed
                ? 'bg-[#B0FF00]/10 border-[#B0FF00]/30 text-[#B0FF00]'
                : 'bg-zinc-900 border-[#242424] text-zinc-600'
                } ${item.active ? 'ring-1 ring-white' : ''}`}
            >
              {item.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 5. Triple iPhone Mockup Layout (Centered composition for Hero Section)
export function TripleMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[380px] sm:h-[450px] flex items-center justify-center overflow-visible">
      {/* Background purple ambient lighting spot */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Left Overlapping Phone */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -15, scale: 0.8 }}
        animate={{ opacity: 1, x: -80, rotate: -8, scale: 0.85 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="absolute z-10 origin-bottom hidden sm:block pointer-events-none"
      >
        <Image
          src={exerciseLibraryImg}
          alt="Meal Scanner Mockup"
          placeholder="blur"
          className="w-[260px] sm:w-[280px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      {/* Right Overlapping Phone */}
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 15, scale: 0.8 }}
        animate={{ opacity: 1, x: 80, rotate: 8, scale: 0.85 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="absolute z-10 origin-bottom hidden sm:block pointer-events-none"
      >
        <Image
          src={nutritionDashboardImg}
          alt="Workout Tracker Mockup"
          placeholder="blur"
          className="w-[260px] sm:w-[280px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      {/* Center Phone - Primary Phone */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute z-20"
      >
        <Image
          src={mealScannerImg}
          alt="AI Coach Mockup"
          placeholder="blur"
          className="w-[260px] sm:w-[280px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
          priority
        />
      </motion.div>

      {/* Mobile-only secondary indicator for single device screens */}
      <div className="absolute bottom-[-15px] sm:hidden text-center text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
        Discover the Rewire training coach
      </div>
    </div>
  )
}
