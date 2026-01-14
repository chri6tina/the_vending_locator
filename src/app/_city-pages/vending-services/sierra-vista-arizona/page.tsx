import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sierra Vista, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sierra Vista, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sierra Vista, vending machines Sierra Vista FL, vending operators Sierra Vista, break room vending Sierra Vista",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sierra-vista-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Sierra Vista, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sierra Vista, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sierra-vista-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sierra Vista, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sierra Vista, Arizona business."
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

export default function SierraVistaArizonaServicesPage() {
  return <PageClient />
}
