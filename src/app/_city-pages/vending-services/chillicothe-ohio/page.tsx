import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Chillicothe, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Chillicothe, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Chillicothe, vending machines Chillicothe FL, vending operators Chillicothe, break room vending Chillicothe",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/chillicothe-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Chillicothe, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chillicothe, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/chillicothe-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Chillicothe, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chillicothe, Ohio business."
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

export default function ChillicotheOhioServicesPage() {
  return <PageClient />
}
