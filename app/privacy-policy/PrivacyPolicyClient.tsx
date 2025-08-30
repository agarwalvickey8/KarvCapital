"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function PrivacyPolicyClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const formatDate = (date: Date) => {
    const day = date.getDate()
    const month = date.toLocaleString("default", { month: "long" })
    const year = date.getFullYear()

    const getOrdinal = (n: number) => {
      const s = ["th", "st", "nd", "rd"]
      const v = n % 100
      return n + (s[(v - 20) % 10] || s[v] || s[0])
    }

    return `${getOrdinal(day)} of ${month} ${year}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {formatDate(new Date())}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, request our
              services, or contact us. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Financial information necessary for investment planning</li>
              <li>Communication preferences and feedback</li>
              <li>Usage data and analytics from our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide, maintain, and improve our financial services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with relevant authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Us</h2>
            <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Karv Capital</strong>
                <br />
                Email: karvcapital@gmail.com
                <br />
                Phone: +91 7062336926
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
