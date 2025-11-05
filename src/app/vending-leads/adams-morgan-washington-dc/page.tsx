import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Adams Morgan, Washington DC | Premium Lead Database',
  description: 'Access verified vending machine locations in Adams Morgan, Washington DC. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Adams Morgan, vending leads Washington DC, Adams Morgan vending opportunities, vending machine business DC',
  openGraph: {
    title: 'Vending Machine Locations in Adams Morgan, Washington DC | Premium Lead Database',
    description: 'Access verified vending machine locations in Adams Morgan, Washington DC. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/adams-morgan-washington-dc',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/adams-morgan-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AdamsMorganPage() {
  return <PageClient />;
}
