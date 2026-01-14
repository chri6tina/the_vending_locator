import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in White Sulphur Springs, WV - Get Free Installation & Service",
  description: "Get professional vending machine services for your White Sulphur Springs, West Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services White Sulphur Springs, vending machines White Sulphur Springs FL, vending operators White Sulphur Springs, break room vending White Sulphur Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/white-sulphur-springs-west-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in White Sulphur Springs, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your White Sulphur Springs, West Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/white-sulphur-springs-west-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in White Sulphur Springs, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your White Sulphur Springs, West Virginia business."
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

export default function WhiteSulphurSpringsWestVirginiaServicesPage() {
  return <PageClient />
}
