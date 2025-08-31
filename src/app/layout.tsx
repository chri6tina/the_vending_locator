import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ZipCodeModalProvider } from '@/contexts/ZipCodeModalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Vending Locator",
  description: "Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.",
  keywords: "vending machines, vending business, vending leads, vending locations, vending opportunities",
  alternates: {
    canonical: "https://www.thevendinglocator.com"
  },
  openGraph: {
    title: "The Vending Locator",
    description: "Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.",
    url: "https://www.thevendinglocator.com",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vending Locator",
    description: "Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ZipCodeModalProvider>
          {children}
        </ZipCodeModalProvider>
      </body>
    </html>
  )
}