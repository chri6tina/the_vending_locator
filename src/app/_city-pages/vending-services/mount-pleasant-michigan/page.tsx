import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mount Pleasant, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mount Pleasant, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mount Pleasant, vending machines Mount Pleasant FL, vending operators Mount Pleasant, break room vending Mount Pleasant",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mount-pleasant-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Mount Pleasant, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mount Pleasant, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mount-pleasant-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mount Pleasant, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mount Pleasant, Michigan business."
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

export default function MountPleasantMichiganServicesPage() {
  return <PageClient />
}
