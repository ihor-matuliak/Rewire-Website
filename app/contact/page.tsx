'use client'

import React, { useState } from 'react'

export default function ContactPage() {
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSending, setIsSending] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message) return
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setIsSuccess(true)
      setMessage('')
    }, 1200)
  }

  return (
    <div className="bg-black text-white min-h-screen pb-16 md:pb-24">
      
      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 text-center py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Customer Care & Support
          </h1>
          <p className="body-new max-w-2xl mx-auto text-zinc-400">
            Need assistance getting started or customizing your experience? Get in touch with our team for quick resolutions.
          </p>
        </div>
      </section>

      {/* 2. Contact Card container matching Strive */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-xl mx-auto">
          
          <div className="card p-5 sm:p-8 bg-[#141414] border border-[#242424] rounded-[2rem] text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            
            {/* Grid of Email / Chat */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-center sm:text-left">
              {/* Email column */}
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1.5 leading-none select-none">📧</span>
                <h4 className="text-white font-bold text-sm mb-0.5">Direct Email</h4>
                <a href="mailto:support@rewire.fit" className="text-[#B0FF00] text-xs sm:text-sm font-bold hover:underline">
                  support@rewire.fit
                </a>
              </div>

              {/* Chat column */}
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1.5 leading-none select-none">💬</span>
                <h4 className="text-white font-bold text-sm mb-0.5">In-App Chat</h4>
                <p className="text-zinc-500 text-[10px] sm:text-xs font-semibold leading-relaxed">
                  Access live support via app <br />
                  7 AM to 10 PM EST
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              Our support team aims to reply to every ticket within 24 hours.
            </p>

            {/* Form */}
            {isSuccess ? (
              <div className="bg-[#B0FF00]/10 border border-[#B0FF00]/30 text-[#B0FF00] text-xs sm:text-sm font-bold py-4 px-6 rounded-xl">
                ✓ Your inquiry has been submitted. Our team will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  required
                  rows={4}
                  className="w-full bg-black border border-[#242424] rounded-2xl p-4 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#B0FF00] transition-colors resize-none"
                />
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-[#B0FF00] text-black px-6 py-2.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition text-xs sm:text-sm font-bold cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  )
}
