import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sylvester, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sylvester, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sylvester, vending machines Sylvester FL, vending operators Sylvester, break room vending Sylvester",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sylvester-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Sylvester, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sylvester, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sylvester-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sylvester, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sylvester, Georgia business."
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

export default function SylvesterGeorgiaServicesPage() {
  return <PageClient />
}
