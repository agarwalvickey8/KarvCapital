"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

declare global {
  interface Window {
    emailjs: any
  }
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleConsentChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      if (!window.emailjs) {
        // Load EmailJS script
        await new Promise((resolve, reject) => {
          const script = document.createElement("script")
          script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
      }

      // Initialize EmailJS with public key
      if (!window.emailjs.init) {
        throw new Error("EmailJS failed to load")
      }

      window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message || "No message provided",
        submission_date: new Date().toLocaleString(),
      }

      await window.emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
      )

      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", message: "", consent: false })
      }, 5000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitError("Failed to send message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.phone && formData.consent

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your wealth creation journey? Get in touch with our experts for personalized financial
            advice.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="xl:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-primary text-lg md:text-xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                {isSubmitted ? (
                  <div className="text-center py-6 md:py-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Thank You!</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    {submitError && (
                      <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600 text-xs md:text-sm">{submitError}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm md:text-base">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="text-sm md:text-base h-10 md:h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm md:text-base">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="text-sm md:text-base h-10 md:h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                        className="text-sm md:text-base h-10 md:h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm md:text-base">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your financial goals or any questions you have..."
                        rows={4}
                        className="text-sm md:text-base resize-none"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={handleConsentChange}
                        required
                        className="mt-0.5"
                      />
                      <Label htmlFor="consent" className="text-xs md:text-sm leading-relaxed">
                        I agree to be contacted by Karv Capital regarding my inquiry and understand that my information
                        will be handled according to the privacy policy.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base h-10 md:h-11"
                      disabled={!isFormValid || isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm md:text-base">Email</p>
                      <p className="text-muted-foreground text-xs md:text-sm">info@karvcapital.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm md:text-base">Phone</p>
                      <p className="text-muted-foreground text-xs md:text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary text-sm md:text-base">Office Hours</p>
                      <p className="text-muted-foreground text-xs md:text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground text-xs md:text-sm">Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary text-sm md:text-base">Address</p>
                      <p className="text-muted-foreground text-xs md:text-sm">Business District, Mumbai</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
