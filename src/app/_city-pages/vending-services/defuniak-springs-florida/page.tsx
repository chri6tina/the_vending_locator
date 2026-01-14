import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in DeFuniak Springs, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your DeFuniak Springs, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services DeFuniak Springs, vending machines DeFuniak Springs FL, vending operators DeFuniak Springs, break room vending DeFuniak Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/defuniak-springs-florida"
  },
  openGraph: {
    title: "Vending Machine Services in DeFuniak Springs, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your DeFuniak Springs, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/defuniak-springs-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in DeFuniak Springs, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your DeFuniak Springs, Florida business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DeFuniakSpringsFloridaServicesPage() {
  return <PageClient />
}
