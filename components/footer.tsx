'use client'

import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer border-t border-[#242424]">
      <div className="container mx-auto px-8">
        <div className="footer-grid">

          {/* Logo & description */}
          <div>
            <Link className="flex items-center mb-4" href="/">
              <span className="w-8 h-8 rounded-lg bg-[#B0FF00] flex items-center justify-center font-black text-black text-base mr-2">
                R
              </span>
              <span className="text-xl font-bold text-white">Rewire</span>
            </Link>
            <p className="text-[#8F8F8F] text-base leading-relaxed">
              Empower your athletic progression using evidence-driven metrics.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Product</h3>
            <ul className="footer-links space-y-2.5">
              <li>
                <Link className="footer-link" href="/#how-it-works">Features</Link>
              </li>
              <li>
                <Link className="footer-link" href="/contact">Help & Support</Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Company</h3>
            <ul className="footer-links space-y-2.5">
              <li>
                <Link className="footer-link" href="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Legal</h3>
            <ul className="footer-links space-y-2.5">
              <li>
                <Link className="footer-link" href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link className="footer-link" href="/terms">Terms</Link>
              </li>
              <li>
                <Link className="footer-link" href="#">Delete Account</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#242424] mt-12 pt-8 md:mt-16 text-center text-[#8F8F8F] text-base">
          <p>© {new Date().getFullYear()} Rewire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
