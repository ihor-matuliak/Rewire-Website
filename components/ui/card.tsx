'use client'

import React from 'react'

interface CardProps {
  title?: string
  subtitle?: string
  glow?: boolean
  className?: string
  children?: React.ReactNode
}

export function Card({
  title,
  subtitle,
  glow = false,
  className = '',
  children
}: CardProps) {
  return (
    <div className={`card ${glow ? 'border-[#B0FF00]/30 shadow-lg shadow-[#B0FF00]/5' : ''} ${className}`}>
      {title && (
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          {subtitle && (
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider block">
              {subtitle}
            </span>
          )}
        </div>
      )}
      <div className="text-[#8F8F8F] text-sm leading-relaxed">{children}</div>
    </div>
  )
}
