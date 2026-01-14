import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Los Gatos, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Los Gatos, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Los Gatos, vending machines Los Gatos FL, vending operators Los Gatos, break room vending Los Gatos",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/los-gatos-california"
  },
  openGraph: {
    title: "Vending Machine Services in Los Gatos, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Los Gatos, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/los-gatos-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Los Gatos, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Los Gatos, California business."
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

export default function LosGatosCaliforniaServicesPage() {
  return <PageClient />
}
