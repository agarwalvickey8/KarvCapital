"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "R.K.",
    city: "Mumbai",
    quote:
      "Karv Capital helped me start my SIP journey with just ₹5,000 per month. In 3 years, I've built a substantial portfolio and learned the importance of disciplined investing.",
  },
  {
    id: 2,
    name: "S.M.",
    city: "Bangalore",
    quote:
      "Their transparent approach and regular portfolio reviews gave me confidence in my investment decisions. My wealth has grown consistently over the past 4 years.",
  },
  {
    id: 3,
    name: "A.P.",
    city: "Delhi",
    quote:
      "The team at Karv Capital simplified complex financial concepts for me. Their goal-based planning approach helped me achieve my dream home purchase ahead of schedule.",
  },
  {
    id: 4,
    name: "M.R.",
    city: "Pune",
    quote:
      "Professional service with a personal touch. They understood my risk profile perfectly and created a diversified portfolio that matches my long-term goals.",
  },
  {
    id: 5,
    name: "V.S.",
    city: "Chennai",
    quote:
      "Excellent guidance on tax-efficient investing. Karv Capital's advice helped me save significantly on taxes while building wealth for my children's education.",
  },
  {
    id: 6,
    name: "N.K.",
    city: "Hyderabad",
    quote:
      "Their insurance planning advice was spot-on. I now have comprehensive coverage for my family while maintaining optimal investment allocation.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from clients who have achieved their financial goals with our guidance.
          </p>
        </div>

        <div className="relative">
          {/* Desktop: 3-card grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Quote className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile: Single card slider */}
          <div className="md:hidden">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-secondary" />
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonials[currentIndex].quote}"</p>
                <div className="text-center">
                  <p className="font-semibold text-primary">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].city}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-secondary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
