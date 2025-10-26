import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Dover, NH | Premium Lead Database',
  description: 'Access verified vending machine locations in Dover, New Hampshire. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Dover, vending leads New Hampshire, Dover vending opportunities, vending machine business NH',
  openGraph: {
    title: 'Vending Machine Locations in Dover, NH | Premium Lead Database',
    description: 'Access verified vending machine locations in Dover, New Hampshire. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/dover-new-hampshire',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/dover-new-hampshire',
  },
};

export default function DoverPage() {
  return <PageClient />;
}
