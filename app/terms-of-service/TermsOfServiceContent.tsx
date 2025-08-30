"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function TermsOfServiceContent() {
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
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {formatDate(new Date())}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Karv Capital's services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Karv Capital provides financial planning, investment advisory, and wealth management services. Our
              services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Investment planning and portfolio management</li>
              <li>Retirement planning and pension advisory</li>
              <li>Tax planning and optimization strategies</li>
              <li>Insurance and risk management solutions</li>
              <li>Estate planning and wealth transfer strategies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Investment Risks</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700 font-semibold">
                IMPORTANT: All investments carry risk and may lose value. Past performance does not guarantee future
                results.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              You acknowledge that investment decisions involve risk of loss, and you are solely responsible for your
              investment decisions. Karv Capital does not guarantee any specific investment performance or returns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Regulatory Compliance</h2>
            <p className="text-gray-700 mb-4">
              Karv Capital operates in compliance with applicable financial regulations. We are registered with relevant
              regulatory authorities and maintain necessary licenses for providing financial services.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>SEBI Registration: [Registration Number]</li>
              <li>ARN: [ARN Number]</li>
              <li>IRDA License: [License Number]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Notify us of any changes in your financial situation</li>
              <li>Review all documents and statements carefully</li>
              <li>Make investment decisions based on your own judgment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Karv Capital's liability is limited to the extent permitted by law. We shall not be liable for any
              indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate this agreement with written notice. Upon termination, all rights and
              obligations shall cease, except those that by their nature should survive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Contact Information</h2>
            <p className="text-gray-700">For questions regarding these terms, please contact us:</p>
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
