import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Yerington, NV - Get Free Installation & Service",
  description: "Get professional vending machine services for your Yerington, Nevada business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Yerington, vending machines Yerington FL, vending operators Yerington, break room vending Yerington",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/yerington-nevada"
  },
  openGraph: {
    title: "Vending Machine Services in Yerington, NV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Yerington, Nevada business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/yerington-nevada",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Yerington, NV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Yerington, Nevada business."
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

export default function YeringtonNevadaServicesPage() {
  return <PageClient />
}
