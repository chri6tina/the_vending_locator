import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Hot Lead Demo | The Vending Locator',
  description: 'Demo of hot lead sale page',
  robots: {
    index: false,
    follow: false
  }
}

export default function HotLeadDemoPage() {
  return <PageClient />
}

