import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Madison, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Madison, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Madison, vending machines Madison FL, vending operators Madison, break room vending Madison",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/madison-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Madison, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Madison, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/madison-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Madison, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Madison, Georgia business."
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

export default function MadisonGeorgiaServicesPage() {
  return <PageClient />
}
