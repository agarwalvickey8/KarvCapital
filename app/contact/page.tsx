import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us - Karv Capital",
  description:
    "Get in touch with Karv Capital for personalized financial planning and investment advisory services. We're here to help you achieve your financial goals.",
  keywords: "contact Karv Capital, financial advisor contact, investment consultation, wealth management contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ContactForm />
      <Footer />
    </div>
  )
}
