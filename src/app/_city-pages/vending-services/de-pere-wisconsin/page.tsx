import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in De Pere, WI - Get Free Installation & Service",
  description: "Get professional vending machine services for your De Pere, Wisconsin business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services De Pere, vending machines De Pere FL, vending operators De Pere, break room vending De Pere",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/de-pere-wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in De Pere, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your De Pere, Wisconsin business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/de-pere-wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in De Pere, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your De Pere, Wisconsin business."
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

export default function DePereWisconsinServicesPage() {
  return <PageClient />
}
