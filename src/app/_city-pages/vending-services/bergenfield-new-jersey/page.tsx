import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bergenfield, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bergenfield, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bergenfield, vending machines Bergenfield FL, vending operators Bergenfield, break room vending Bergenfield",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bergenfield-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in Bergenfield, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bergenfield, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bergenfield-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bergenfield, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bergenfield, New Jersey business."
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

export default function BergenfieldNewJerseyServicesPage() {
  return <PageClient />
}
