import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sault Ste. Marie, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sault Ste. Marie, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sault Ste. Marie, vending machines Sault Ste. Marie FL, vending operators Sault Ste. Marie, break room vending Sault Ste. Marie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sault-ste-marie-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Sault Ste. Marie, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sault Ste. Marie, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sault-ste-marie-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sault Ste. Marie, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sault Ste. Marie, Michigan business."
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

export default function SaultSteMarieMichiganServicesPage() {
  return <PageClient />
}
