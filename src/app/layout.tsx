import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ZipCodeModalProvider } from '@/contexts/ZipCodeModalContext'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'The Vending Locator - Qualified Vending Location Leads',
    template: '%s | The Vending Locator'
  },
  description: 'Find qualified vending machine locations with verified contact information. Access 4,100+ pre-qualified locations across 37+ cities. Trusted by 3,000+ vending operators nationwide.',
  keywords: [
    'vending machine locations',
    'vending leads', 
    'vending operators',
    'qualified locations',
    'vending machine business',
    'vending opportunities',
    'vending placement',
    'vending machine leads'
  ].join(', '),
  authors: [{ name: 'The Vending Locator' }],
  creator: 'The Vending Locator',
  publisher: 'The Vending Locator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.thevendinglocator.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thevendinglocator.com',
    siteName: 'The Vending Locator',
    title: 'The Vending Locator - Qualified Vending Location Leads',
    description: 'Find qualified vending machine locations with verified contact information. Access 4,100+ pre-qualified locations across 37+ cities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Vending Locator - Find Qualified Vending Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vendinglocator',
    creator: '@vendinglocator',
    title: 'The Vending Locator - Qualified Vending Location Leads',
    description: 'Find qualified vending machine locations with verified contact information.',
    images: ['/og-image.jpg'],
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
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Vending Locator",
              "url": "https://www.thevendinglocator.com",
              "logo": "https://www.thevendinglocator.com/logo.png",
              "description": "Find qualified vending machine locations with verified contact information. Access 4,100+ pre-qualified locations across 37+ cities.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/vendinglocator",
                "https://www.linkedin.com/company/vendinglocator",
                "https://twitter.com/vendinglocator"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16569722490"
          strategy="afterInteractive"
          id="google-ads-tracking"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16569722490');
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
          id="google-analytics"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* User Activity Tracking Script */}
        <Script
          src="/tracking.js"
          strategy="afterInteractive"
          id="vending-locator-tracking"
        />
        
        <ZipCodeModalProvider>
          {children}
        </ZipCodeModalProvider>
      </body>
    </html>
  )
}
