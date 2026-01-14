import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Peachtree Corners, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Peachtree Corners, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Peachtree Corners, vending machines Peachtree Corners FL, vending operators Peachtree Corners, break room vending Peachtree Corners",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/peachtree-corners-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Peachtree Corners, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Peachtree Corners, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/peachtree-corners-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Peachtree Corners, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Peachtree Corners, Georgia business."
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

export default function PeachtreeCornersGeorgiaServicesPage() {
  return <PageClient />
}
