import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in East Grand Forks, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your East Grand Forks, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services East Grand Forks, vending machines East Grand Forks FL, vending operators East Grand Forks, break room vending East Grand Forks",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/east-grand-forks-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in East Grand Forks, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your East Grand Forks, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/east-grand-forks-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in East Grand Forks, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your East Grand Forks, Minnesota business."
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

export default function EastGrandForksMinnesotaServicesPage() {
  return <PageClient />
}
