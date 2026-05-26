'use client'

import React from 'react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-16 md:pb-24 font-sans">
      <div className="pt-8 md:pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center">
              <h1 className="super mb-4 md:mb-6 text-center text-5xl sm:text-[64px] font-bold text-white leading-tight sm:leading-[70.4px] tracking-[-0.02em]">
                Terms & Conditions of Service
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
                  Welcome to Rewire. These Terms and Conditions of Service ("Terms") represent a legally binding contract between you and Rewire, regulating your use of the Rewire mobile application (the "App"), website, and associated features.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">2. ACCEPTANCE OF TERMS</h2>
                <p className="mb-6">
                  By downloading, registering, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the App.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">3. CHANGES TO TERMS</h2>
                <p className="mb-6">
                  We reserve the right to modify these Terms at any time. All changes are effective immediately when posted in the App. Your continued use of the App following the posting of revised Terms means that you accept and agree to the changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">4. USER ACCOUNTS</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.1 Registration</h3>
                  <p className="mb-4">
                    To access features of the App, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.2 Account Security</h3>
                  <p className="mb-4">
                    You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your password.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">4.3 Third-Party Authentication</h3>
                  <p className="mb-6">
                    The App allows authentication through third-party services. Your use of these services is subject to their respective terms and privacy policies.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">5. SUBSCRIPTION SERVICES</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">5.1 Subscription Plans and Pricing</h3>
                  <p className="mb-2">The App offers subscription plans:</p>
                  <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                    <li>Pro Monthly: Premium workout logging, AI scanning, and wearable syncing billed monthly.</li>
                    <li>Pro Annual: Annual subscription billing model, offering savings compared to monthly subscriptions.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">5.2 Auto-Renewal Terms</h3>
                  <p className="mb-2">
                    All subscriptions automatically renew at the end of the subscription period unless cancelled.
                  </p>
                  <ul className="list-disc pl-5 sm:pl-8 mb-4 text-[#8F8F8F] space-y-2">
                    <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
                    <li>The renewal charge will be the standard subscription rate.</li>
                    <li>Auto-renewal may be turned off in your Account Settings after purchase.</li>
                    <li>No cancellation of the current subscription is allowed during the active subscription period.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">5.3 Free Trial</h3>
                  <p className="mb-4">
                    Free trials are available. You will not be charged during the trial period. If you do not cancel before the end of the trial, your subscription will automatically convert to a paid subscription.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">5.4 Cancellation Policy</h3>
                  <p className="mb-4">
                    You may cancel your subscription at any time. Cancellations will take effect at the end of the current billing period. No refunds are provided for partial subscription periods.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">5.5 Price Changes</h3>
                  <p className="mb-6">
                    We reserve the right to adjust pricing for our services. Any price changes will take effect following notice to you.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">6. HEALTH AND FITNESS INFORMATION</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">6.1 Not Medical Advice</h3>
                  <p className="mb-4">
                    The App provides health, fitness, and nutritional information for educational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a physician regarding any medical conditions.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">6.2 Health Data</h3>
                  <p className="mb-6">
                    You may choose to connect the App with platforms like Apple Health. Any data shared with these platforms is subject to their respective privacy policies.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">7. USER CONTENT</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">7.1 User-Generated Content</h3>
                  <p className="mb-4">
                    The App may allow you to create, upload, post, or share content. You retain ownership of your User Content, but you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display your User Content to provide the services.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">7.2 Prohibited Content</h3>
                  <p className="mb-6">
                    You agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise objectionable.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">8. INTELLECTUAL PROPERTY RIGHTS</h2>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">8.1 App Content</h3>
                  <p className="mb-4">
                    The App and its contents, features, and functionality are owned by Rewire and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">8.2 Limited License</h3>
                  <p className="mb-6">
                    We grant you a personal, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial use.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">9. PROHIBITED USES</h2>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-5 sm:pl-8 mb-6 text-[#8F8F8F] space-y-2">
                  <li>Use the App in any way that violates applicable laws or regulations.</li>
                  <li>Use the App to advertise or solicit goods and services.</li>
                  <li>Engage in behavior that restricts or inhibits anyone's use or enjoyment of the App.</li>
                  <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt the App.</li>
                  <li>Decompile, reverse engineer, or disassemble the App.</li>
                  <li>Introduce viruses, trojans, worms, or other malicious code.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">10. TERMINATION</h2>
                <p className="mb-6">
                  We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">11. DISCLAIMER OF WARRANTIES</h2>
                <p className="mb-6 font-bold text-zinc-300">
                  THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">12. LIMITATION OF LIABILITY</h2>
                <p className="mb-6 font-bold text-zinc-300">
                  IN NO EVENT WILL WE, OUR AFFILIATES, OR OUR LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">13. INDEMNIFICATION</h2>
                <p className="mb-6">
                  You agree to defend, indemnify, and hold harmless Rewire and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of your violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">14. GOVERNING LAW</h2>
                <p className="mb-6">
                  These Terms and your use of the App will be governed by and construed in accordance with the laws of the jurisdiction in which Rewire operates, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">15. DISPUTE RESOLUTION</h2>
                <p className="mb-6">
                  Any dispute arising from these Terms will be resolved through binding arbitration in accordance with applicable rules.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">16. LEGAL AGREEMENTS</h2>
                <p className="mb-2">By using the App, you agree to:</p>
                <ul className="list-disc pl-5 sm:pl-8 mb-6 text-[#8F8F8F] space-y-2">
                  <li>
                    <Link href="/privacy" className="text-[#B0FF00] hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#B0FF00] hover:underline">
                      Apple Licensed Application End User License Agreement (EULA)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-b border-[#2A2A2A] pb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white uppercase">17. CONTACT INFORMATION</h2>
                <p className="mb-6">
                  For questions about these Terms, please contact us at:{' '}
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

              {/* Acknowledgement footer matching Strive */}
              <div className="border-t border-[#2A2A2A] pt-6 mt-12 text-center">
                <p className="text-white text-base leading-relaxed max-w-xl mx-auto">
                  By using the Rewire App, you acknowledge that you have read the Terms of Service and agree to be bound by it.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
