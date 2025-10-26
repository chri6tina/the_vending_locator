import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Salem, NH | Premium Lead Database',
  description: 'Access verified vending machine locations in Salem, New Hampshire. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Salem, vending leads New Hampshire, Salem vending opportunities, vending machine business NH',
  openGraph: {
    title: 'Vending Machine Locations in Salem, NH | Premium Lead Database',
    description: 'Access verified vending machine locations in Salem, New Hampshire. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/salem-new-hampshire',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/salem-new-hampshire',
  },
};

export default function SalemPage() {
  return <PageClient />;
}
