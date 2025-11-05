import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Joplin, Missouri | Premium Lead Database',
  description: 'Access verified vending machine locations in Joplin, Missouri. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Joplin, vending leads Missouri, vending machine placement Joplin, vending opportunities Joplin',
  openGraph: {
    title: 'Vending Machine Locations in Joplin, Missouri',
    description: 'Access verified vending machine locations in Joplin, Missouri. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/joplin-missouri',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/joplin-missouri'
  }
}

export default function JoplinMissouriVendingLeadsPage() {
  return <PageClient />
}
