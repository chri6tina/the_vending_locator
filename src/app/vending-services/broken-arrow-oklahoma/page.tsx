import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Broken Arrow, OK - Get Free Installation & Service",
  description: "Get professional vending machine services for your Broken Arrow, Oklahoma business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Broken Arrow, vending machines Broken Arrow OK, vending operators Broken Arrow, break room vending Broken Arrow",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/broken-arrow-oklahoma"
  },
  openGraph: {
    title: "Vending Machine Services in Broken Arrow, OK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Broken Arrow, Oklahoma business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/broken-arrow-oklahoma",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Broken Arrow, OK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Broken Arrow, Oklahoma business."
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

export default function BrokenArrowOklahomaServicesPage() {
  return <PageClient />
}
