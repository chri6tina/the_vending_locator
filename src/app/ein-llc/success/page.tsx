import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "LLC Formation Successful - Your Business is Being Formed | The Vending Locator",
  description: "Thank you for using our EIN & LLC filing service. Your business formation is in progress. You'll receive confirmation documents within 1-2 business days.",
  robots: {
    index: false,
    follow: false,
  }
}

export default function EinLLCSuccessPage() {
  return <PageClient />
}

