import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Karv Capital - Smart Wealth Management for Your Future",
  description:
    "Goal-based plans, transparent advice, and disciplined investing. Build wealth through SIPs, mutual funds, and prudent insurance planning with Karv Capital.",
  generator: "v0.app",
  keywords: [
    "wealth management",
    "SIP",
    "systematic investment plan",
    "mutual funds",
    "financial planning",
    "investment advisory",
    "insurance planning",
    "tax efficient investing",
    "goal based planning",
    "Mumbai financial advisor",
  ].join(", "),
  authors: [{ name: "Karv Capital", url: "https://karvcapital.com" }],
  creator: "Karv Capital",
  publisher: "Karv Capital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karvcapital.com",
    siteName: "Karv Capital",
    title: "Karv Capital - Smart Wealth Management for Your Future",
    description:
      "Goal-based plans, transparent advice, and disciplined investing. Build wealth through SIPs, mutual funds, and prudent insurance planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karv Capital - Smart Wealth Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karv Capital - Smart Wealth Management for Your Future",
    description: "Goal-based plans, transparent advice, and disciplined investing.",
    images: ["/og-image.jpg"],
    creator: "@karvcapital",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://karvcapital.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karv Capital",
  description:
    "Smart wealth management for your future through goal-based plans, transparent advice, and disciplined investing.",
  url: "https://karvcapital.com",
  logo: "https://karvcapital.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://facebook.com/karvcapital",
    "https://twitter.com/karvcapital",
    "https://linkedin.com/company/karvcapital",
  ],
  founder: {
    "@type": "Person",
    name: "Karv Capital Team",
  },
  foundingDate: "2019",
  numberOfEmployees: "10-50",
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E3A8A" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Google Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4 placeholder
              // Replace GA_MEASUREMENT_ID with your actual measurement ID
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
