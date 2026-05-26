'use client'

import React from 'react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-16 md:pb-24 font-sans">
      <div className="pt-8 md:pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center">
              <h1 className="super mb-4 md:mb-6 text-center text-5xl sm:text-[64px] font-bold text-white leading-tight sm:leading-[70.4px] tracking-[-0.02em]">
                Data Privacy Policy
              </h1>
              <p className="text-[#8F8F8F] text-base mb-8 md:mb-12 text-center">
                Last Updated: May 25, 2026
              </p>
            </div>

            {/* Content sections */}
            <div className="text-left text-white text-base leading-relaxed space-y-8 md:space-y-12">

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">1. INTRODUCTION</h2>
                <p className="mb-6">
                  This Policy describes the procedures by which Rewire ("we", "our", or "us") gathers, stores, and shares your personal data when you interact with our website and mobile application (the "App").
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">2. INFORMATION WE COLLECT</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">2.1 Information You Provide to Us</h3>
                  <p className="mb-2">We may collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                    <li>Account information (name, email address, password)</li>
                    <li>Profile information (age, gender, weight, height, fitness goals)</li>
                    <li>Health and fitness data (workout logs, calorie intakes, food items)</li>
                    <li>Photos and videos that you upload for food scanning and progress tracking</li>
                    <li>Preferences and settings</li>
                    <li>Communications with us</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">2.2 Information Collected Automatically</h3>
                  <p className="mb-2">When you use our App, we may automatically collect certain information, including:</p>
                  <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                    <li>Device information (model, operating system, IP address)</li>
                    <li>Usage data (workout frequency, feature usage, session duration)</li>
                    <li>Location information (if permitted by your device)</li>
                    <li>Crash reports and performance analytics</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">2.3 Information from Third Parties</h3>
                  <p className="mb-2">We may receive information about you from third parties, including:</p>
                  <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                    <li>Authentication services (Google, Apple)</li>
                    <li>Health platforms (Apple Health, Garmin Connect, Whoop, Strava)</li>
                    <li>Payment processors</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">2.4 Purchase Information</h3>
                  <p className="mb-2">When you make purchases through the App, we collect:</p>
                  <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                    <li>Purchase history (subscription plans, dates)</li>
                    <li>Transaction tokens provided by app store platforms</li>
                    <li>Subscription status</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">3. HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-2">We use the information we collect to:</p>
                <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                  <li>Provide, maintain, and improve the App</li>
                  <li>Process transactions and manage your subscription</li>
                  <li>Personalize your experience</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Monitor usage patterns and analyze trends</li>
                  <li>Protect against identity theft and prevent illegal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">3.1 Cross-App and Website Tracking</h3>
                  <p className="mb-6">
                    With your permission, we may track your activity across other companies' apps and websites for marketing and analytics. You can control this tracking in your device settings.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">4. HOW WE SHARE YOUR INFORMATION</h2>
                <p className="mb-2">We may share your information with:</p>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.1 Service Providers</h3>
                  <p className="mb-4">We may share your information with third-party vendors and service providers who perform services on our behalf.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.2 Health Platforms</h3>
                  <p className="mb-4">With your permission, we may share your health and fitness data with platforms like Apple Health.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.3 Analytics Partners</h3>
                  <p className="mb-4">We work with analytics partners to understand how users engage with our App.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.4 Legal Requirements</h3>
                  <p className="mb-4">We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.5 Business Transfers</h3>
                  <p className="mb-6">If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">5. DATA RETENTION</h2>
                <p className="mb-6">
                  We retain personal information for as long as necessary to provide the App and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">6. DATA SECURITY</h2>
                <p className="mb-6">
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">7. YOUR RIGHTS AND CHOICES</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">7.1 Account Information</h3>
                  <p className="mb-4">You can review and update your account information directly within the App.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">7.2 Location Information</h3>
                  <p className="mb-4">You can control the App's access to your device's location through your device settings.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">7.3 Push Notifications</h3>
                  <p className="mb-4">You can opt out of receiving push notifications through your device settings.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">7.4 Do Not Track</h3>
                  <p className="mb-6">The App does not respond to Do Not Track signals.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">8. CHILDREN'S PRIVACY</h2>
                <p className="mb-6">
                  The App is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">9. INTERNATIONAL DATA TRANSFERS</h2>
                <p className="mb-6">
                  Your information may be transferred to and maintained on computers located outside of your state, province, or country, where data protection laws may differ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">10. CALIFORNIA PRIVACY RIGHTS</h2>
                <p className="mb-6">
                  If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA).
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">11. EUROPEAN ECONOMIC AREA (EEA) USERS</h2>
                <p className="mb-6">
                  If you are from the EEA, our legal basis for collecting and using your personal information depends on the personal information concerned and the context in which we collect it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">12. CHANGES TO THIS PRIVACY POLICY</h2>
                <p className="mb-6">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div className="border-b border-[#2A2A2A] pb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">13. CONTACT US</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:{' '}
                  <a href="mailto:support@rewire.fit" className="text-[#B0FF00] hover:underline">
                    support@rewire.fit
                  </a>.
                </p>
              </div>

              {/* Specific permissions */}
              <div className="space-y-6 pt-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">SPECIFIC APP PERMISSIONS AND DATA USAGE</h2>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Camera and Photo Library Access</h3>
                  <p className="mb-4">
                    The App requests access to your device's camera and photo library for features such as scanning food and logging meal photos. We do not use these images for any purpose other than providing functionality.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Health Data</h3>
                  <p className="mb-4">
                    With your permission, the App can access and write to your health data through platforms like Apple Health to track workout minutes, active calories, and steps. This helps provide accurate recovery trends.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Notifications</h3>
                  <p className="mb-4">
                    The App requests permission to send you reminders, logging prompts, and recovery metrics. You can control notifications in your settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Face ID</h3>
                  <p className="mb-4">
                    On compatible devices, the App may use Face ID for authentication. Biometric data is stored securely on your device and is not accessible to us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">User Tracking</h3>
                  <p className="mb-4">
                    The App may request permission to track your activity across other apps and websites to measure marketing campaigns. You can control this in your settings.
                  </p>
                </div>
              </div>

              {/* Legal documents links */}
              <div className="space-y-4 pt-6 border-t border-[#2A2A2A]">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">RELATED LEGAL DOCUMENTS</h2>
                <ul className="list-disc pl-5 sm:pl-8 mb-6 text-[#8F8F8F] space-y-2">
                  <li>
                    <Link href="#" className="text-[#B0FF00] hover:underline">
                      Apple Licensed Application End User License Agreement (EULA)
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-[#B0FF00] hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Acknowledgement footer matching Strive */}
              <div className="border-t border-[#2A2A2A] pt-6 mt-12 text-center">
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                  By using the Rewire App, you acknowledge that you have read this Privacy Policy and agree to be bound by it.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
