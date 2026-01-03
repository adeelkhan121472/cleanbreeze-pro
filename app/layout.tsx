import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://cleanbreezepro.com'),
  title: {
    default: 'Clean Breeze Pro - Professional HVAC & Air Duct Cleaning | NADCA Certified',
    template: '%s | Clean Breeze Pro'
  },
  description: 'Expert HVAC and air duct cleaning services across New York, London, Tokyo, and Paris. Residential & commercial HVAC maintenance, duct cleaning, coil cleaning. NADCA certified, fully insured. Improve air quality, reduce energy costs!',
  keywords: [
    'HVAC cleaning',
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
    'New York HVAC cleaning',
    'London air duct cleaning',
    'Tokyo HVAC services',
    'Paris duct cleaning',
    'energy efficiency HVAC'
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
    title: 'Clean Breeze Pro - Professional HVAC & Air Duct Cleaning | NADCA Certified',
    description: 'Expert HVAC and air duct cleaning services. Residential & commercial HVAC maintenance. NADCA certified, improve air quality, reduce energy costs. Serving New York, London, Tokyo, Paris.',
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
    title: 'Clean Breeze Pro - HVAC & Air Duct Cleaning',
    description: 'Expert HVAC & air duct cleaning. NADCA certified. Improve air quality, reduce energy costs. Residential & commercial services.',
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
