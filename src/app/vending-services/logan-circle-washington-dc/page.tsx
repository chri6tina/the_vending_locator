import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Logan Circle, DC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Logan Circle, Washington DC business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Logan Circle, vending machines Logan Circle DC, vending operators Logan Circle, break room vending Logan Circle",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/logan-circle-washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in Logan Circle, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Logan Circle, Washington DC business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/logan-circle-washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Logan Circle, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Logan Circle, Washington DC business."
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

export default function LoganCircleWashingtonDcServicesPage() {
  return <PageClient />
}
