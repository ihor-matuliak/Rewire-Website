'use client'

import React from 'react'

export function AppsIntegration() {
  const apps = [
    { name: 'Strava', status: 'Coming Soon', active: false },
    { name: 'Garmin', status: 'Coming Soon', active: false },
    { name: 'Apple Health', status: 'Available Now', active: true },
    { name: 'Whoop', status: 'Coming Soon', active: false }
  ]

  return (
    <section className="py-16 md:py-28 bg-black border-b border-[#242424]">
      <div className="container mx-auto px-4">
        {/* Header section matching Strive */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
            Syncs with your favorite fitness apps
          </h2>
          <p className="body-new max-w-2xl mx-auto">
            Rewire connects directly with leading health tools and wearables to provide a comprehensive overview of your athletic journey.
          </p>
        </div>

        {/* 4 columns grid matching Strive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {apps.map((app, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 card">
              <span className="text-[#8F8F8F] mb-3 font-semibold text-sm sm:text-base">
                {app.name}
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold transition-all ${
                  app.active
                    ? 'bg-[#2A2A2A] text-white'
                    : 'bg-[#1A1A1A] text-[#B0FF00]'
                }`}
              >
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
