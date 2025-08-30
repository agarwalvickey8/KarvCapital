import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/karv-logo.png"
                alt="Karv Capital"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Smart wealth management for your future. We help individuals and families build wealth through disciplined
              investing and transparent financial advice.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/917062336926"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#sip-calculator"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  SIP Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Wealth Planning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-xs text-primary-foreground/60 space-y-2">
            <p>
              <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks. Please read all scheme
              related documents carefully before investing. Past performance is not indicative of future returns.
            </p>
            <p>
              Investment in securities market are subject to market risks. Read all the related documents carefully
              before investing.
            </p>
            <p>
              <strong>Amfi Registeration Number:</strong> ARN-333409
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">© 2025 Karv Capital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
