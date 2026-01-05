import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://cleanbreezepro.com'),
  title: {
    default: 'HVAC & Air Duct Cleaning [2025]: Cut Energy Bills 20% | NADCA Certified',
    template: '%s | Clean Breeze Pro'
  },
  description: 'Struggling with poor air quality? Expert HVAC cleaning removes allergens & boosts efficiency. Serving 5 US cities. Free quote in 60 seconds. NADCA certified, fully insured.',
  keywords: [
    'HVAC cleaning 2025',
    'air duct cleaning',
    'duct cleaning services',
    'HVAC maintenance',
    'residential HVAC cleaning',
    'commercial HVAC cleaning',
    'NADCA certified',
    'air quality improvement',
    'coil cleaning',
    'furnace cleaning',
    'AC cleaning',
    'ventilation cleaning',
    'Denver HVAC cleaning',
    'Houston air duct cleaning',
    'Alexandria HVAC services',
    'Tampa duct cleaning',
    'Miami HVAC cleaning',
    'energy efficiency HVAC',
    'reduce energy bills'
  ],
  authors: [{ name: 'Clean Breeze Pro' }],
  creator: 'Clean Breeze Pro',
  publisher: 'Clean Breeze Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cleanbreezepro.com',
    title: 'HVAC & Air Duct Cleaning [2025]: Cut Energy Bills 20% | NADCA Certified',
    description: 'Struggling with poor air quality? Expert HVAC cleaning removes allergens & boosts efficiency. Serving Denver, Houston, Alexandria, Tampa, Miami. Free quote in 60 seconds.',
    siteName: 'Clean Breeze Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Breeze Pro - Professional HVAC & Air Duct Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Cleaning [2025]: Cut Energy Bills 20% | NADCA Certified',
    description: 'Struggling with poor air quality? Expert HVAC cleaning removes allergens & boosts efficiency. Free quote in 60 seconds. NADCA certified.',
    images: ['/og-image.jpg'],
    creator: '@cleanbreezepro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bubble-bg">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
