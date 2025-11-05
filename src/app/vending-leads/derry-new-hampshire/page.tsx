import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Derry, NH | Premium Lead Database',
  description: 'Access verified vending machine locations in Derry, New Hampshire. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Derry, vending leads New Hampshire, Derry vending opportunities, vending machine business NH',
  openGraph: {
    title: 'Vending Machine Locations in Derry, NH | Premium Lead Database',
    description: 'Access verified vending machine locations in Derry, New Hampshire. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/derry-new-hampshire',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/derry-new-hampshire',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DerryPage() {
  return <PageClient />;
}
