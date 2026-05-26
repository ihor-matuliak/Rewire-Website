import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rewire | Premium AI Fitness, Calories & Habit Tracker',
  description: 'Re-engineer your performance. Rewire syncs your calorie counts, nutrition metrics, workout logs, habits, and progress charts into one intelligent dark-themed cockpit.',
  keywords: 'fitness tracker, calorie tracker, workout log, AI coach, gym habits, progress charts, smartwatch integration, premium fitness SaaS',
  authors: [{ name: 'Rewire Team' }],
  metadataBase: new URL('https://rewire-fitness.vercel.app'),
  openGraph: {
    title: 'Rewire | Premium AI Fitness & Habit Tracker',
    description: 'Track workouts, count calories, build streaks, and command your potential with a futuristic dashboard.',
    type: 'website',
    url: 'https://rewire-fitness.vercel.app',
    siteName: 'Rewire',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rewire Fitness Dashboard preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rewire | Premium AI Fitness Tracker',
    description: 'Futuristic fitness dashboard mapping your nutrition, routines, and progress.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-foreground bg-grid-pattern antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
