import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mount Juliet, TN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mount Juliet, Tennessee business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mount Juliet, vending machines Mount Juliet FL, vending operators Mount Juliet, break room vending Mount Juliet",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mount-juliet-tennessee"
  },
  openGraph: {
    title: "Vending Machine Services in Mount Juliet, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mount Juliet, Tennessee business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mount-juliet-tennessee",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mount Juliet, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mount Juliet, Tennessee business."
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

export default function MountJulietTennesseeServicesPage() {
  return <PageClient />
}
