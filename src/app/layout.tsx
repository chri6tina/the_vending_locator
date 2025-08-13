import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ZipCodeModalProvider } from '@/contexts/ZipCodeModalContext'

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
      <body className={inter.className}>
        <ZipCodeModalProvider>
          {children}
        </ZipCodeModalProvider>
      </body>
    </html>
  )
}
