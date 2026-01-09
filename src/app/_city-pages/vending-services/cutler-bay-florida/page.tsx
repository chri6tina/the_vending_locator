import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Cutler Bay, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Cutler Bay, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Cutler Bay, vending machines Cutler Bay FL, vending operators Cutler Bay, break room vending Cutler Bay",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/cutler-bay-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Cutler Bay, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cutler Bay, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/cutler-bay-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Cutler Bay, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cutler Bay, Florida business."
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

export default function CutlerBayFLVendingServicesPage() {
  return <PageClient />
}
