"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function CookiePolicyClient() {
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
        <h1 className="text-4xl font-bold text-primary mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {formatDate(new Date())}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies are necessary for the website to function and cannot be switched off.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Session management</li>
                <li>Security features</li>
                <li>Load balancing</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies help us understand how visitors interact with our website.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Google Analytics</li>
                <li>Page view tracking</li>
                <li>User behavior analysis</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Functional Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies remember your preferences and provide enhanced features.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Language preferences</li>
                <li>Theme settings</li>
                <li>Form data retention</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can
              impact your user experience and parts of our website may no longer be fully accessible.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Browser Settings</h4>
              <p className="text-gray-700">
                Most browsers allow you to view, manage, delete, and block cookies. You can find instructions for your
                specific browser in its help section.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              Some cookies on our website are set by third-party services. We use these services to enhance your
              experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Google Analytics:</strong> For website analytics and performance monitoring
              </li>
              <li>
                <strong>Social Media:</strong> For social sharing functionality
              </li>
              <li>
                <strong>Marketing Tools:</strong> For targeted advertising and remarketing
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Contact Us</h2>
            <p className="text-gray-700">If you have any questions about our use of cookies, please contact us:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Karv Capital</strong>
                <br />
                Email: karvcapital@gmail.com
                <br />
                Phone: +91 7597376926
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
