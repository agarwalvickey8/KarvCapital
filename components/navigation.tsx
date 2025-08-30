"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#how-we-work", label: "How We Work" },
    { href: "/contact", label: "Contact Us", isPage: true },
  ]

  const handleNavClick = (href: string, isPage?: boolean) => {
    if (isPage) {
      router.push(href)
    } else if (pathname !== "/") {
      // If not on home page, navigate to home page with hash
      router.push(`/${href}`)
    } else {
      // If on home page, just scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/917597376926", "_blank")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/karv_header.png" alt="Karv Capital" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="bg-secondary hover:bg-secondary/90 ml-6" onClick={openWhatsApp}>
              Start Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button className="bg-secondary hover:bg-secondary/90 mt-4" onClick={openWhatsApp}>
                Start Your Journey
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
