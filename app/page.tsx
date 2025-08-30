"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { SIPCalculator } from "@/components/sip-calculator"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import {
  TrendingUp,
  Users,
  Calendar,
  Shield,
  MessageCircle,
  FileText,
  Play,
  BarChart3,
  PiggyBank,
  Umbrella,
  Target,
  Calculator,
} from "lucide-react"

export default function HomePage() {
  const openWhatsApp = () => {
    window.open("https://wa.me/917597376926", "_blank")
  }

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
            Smart Wealth Management for Your Future
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Goal-based plans, transparent advice, and disciplined investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white flex items-center gap-2"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToServices}>
              Explore Services
            </Button>
          </div>

          {/* Simple abstract graphic */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="h-32 w-32 rounded-full bg-primary/10"></div>
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-secondary/20"></div>
              <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-secondary/30"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">About Karv Capital</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground mb-6">
                Karv Capital helps individuals and families build wealth through disciplined SIPs, diversified mutual
                funds, and prudent insurance planning. Our mission is to simplify finance, making wealth creation
                accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground">
                Our values are transparency, suitability, and long-term focus. We believe in building lasting
                relationships with our clients through honest advice and consistent performance.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">25+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">₹10L+</h3>
                <p className="text-sm text-muted-foreground">Assets Under Management</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">100%</h3>
                <p className="text-sm text-muted-foreground">Transparent Advice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures your financial goals are met through disciplined planning and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                Understand your goals and risk profile through detailed discussion
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Planning</h3>
              <p className="text-muted-foreground">Create asset allocation strategy and select suitable products</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Execution</h3>
              <p className="text-muted-foreground">Paperless onboarding and automated investment setup</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Growth</h3>
              <p className="text-muted-foreground">Periodic reviews and portfolio rebalancing for optimal returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to help you achieve your wealth creation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <PiggyBank className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">SIPs</h3>
                <p className="text-muted-foreground mb-4">
                  Systematic Investment Plans for disciplined wealth creation through regular investments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">Mutual Funds</h3>
                <p className="text-muted-foreground mb-4">
                  Diversified mutual fund portfolios across equity, debt, and hybrid categories.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Umbrella className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">Insurance</h3>
                <p className="text-muted-foreground mb-4">
                  Term life and health insurance planning for comprehensive financial protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">Wealth Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive wealth management strategies for long-term financial success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Calculator className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">Tax-efficient Investing</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize your investments for maximum tax efficiency and returns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">Goal Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor and track progress towards your financial goals with regular updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SIP Calculator Section */}
      <section id="sip-calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SIPCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Testimonials />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
