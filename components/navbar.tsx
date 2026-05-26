'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { label: 'About Us', href: '/about' },
    { label: 'Help & Support', href: '/contact' }
  ]

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#242424]">
      {/* Decorative scroll progress line wrapper */}
      <div className="page-scroll-progress" />

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Custom Rewire logo icon mimicking Strive's branding weight */}
            <span className="w-8 h-8 rounded-lg bg-[#B0FF00] flex items-center justify-center font-black text-black text-base mr-2">
              R
            </span>
            <span className="text-xl font-bold text-white tracking-tight">Rewire</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition text-m font-medium ${isActive ? 'text-white font-bold' : 'text-[#8F8F8F] hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div>
            <Link
              href="/contact"
              className="bg-[#B0FF00] text-black px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition inline-block text-sm font-bold"
            >
              Try For Free
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}
