import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Glen Ellyn, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Glen Ellyn, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Glen Ellyn, vending machines Glen Ellyn FL, vending operators Glen Ellyn, break room vending Glen Ellyn",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/glen-ellyn-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Glen Ellyn, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glen Ellyn, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/glen-ellyn-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Glen Ellyn, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glen Ellyn, Illinois business."
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

export default function GlenEllynIllinoisServicesPage() {
  return <PageClient />
}
