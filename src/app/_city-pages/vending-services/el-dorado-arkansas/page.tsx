import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in El Dorado, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your El Dorado, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services El Dorado, vending machines El Dorado FL, vending operators El Dorado, break room vending El Dorado",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/el-dorado-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in El Dorado, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your El Dorado, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/el-dorado-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in El Dorado, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your El Dorado, Arkansas business."
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

export default function ElDoradoArkansasServicesPage() {
  return <PageClient />
}
