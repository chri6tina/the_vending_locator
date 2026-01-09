import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sandy Springs, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sandy Springs, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sandy Springs, vending machines Sandy Springs GA, vending operators Sandy Springs, break room vending Sandy Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sandy-springs-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Sandy Springs, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sandy Springs, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sandy-springs-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sandy Springs, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sandy Springs, Georgia business."
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

export default function SandySpringsGeorgiaServicesPage() {
  return <PageClient />
}
