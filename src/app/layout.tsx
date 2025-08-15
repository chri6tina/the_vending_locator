import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ZipCodeModalProvider } from '@/contexts/ZipCodeModalContext'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Vending Locator - Qualified Vending Location Leads',
  description: 'Find qualified vending machine locations with verified contact information. Trusted by 3,000+ vending operators nationwide.',
  keywords: 'vending machine locations, vending leads, vending operators, qualified locations',
  authors: [{ name: 'The Vending Locator' }],
  openGraph: {
    title: 'The Vending Locator - Qualified Vending Location Leads',
    description: 'Find qualified vending machine locations with verified contact information.',
    type: 'website',
    locale: 'en_US',
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
