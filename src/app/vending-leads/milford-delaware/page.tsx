import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Milford, Delaware | Premium Lead Database',
  description: 'Access verified vending machine locations in Milford, Delaware. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Milford, vending leads Delaware, Milford vending opportunities, vending machine business DE',
  openGraph: {
    title: 'Vending Machine Locations in Milford, Delaware | Premium Lead Database',
    description: 'Access verified vending machine locations in Milford, Delaware. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/milford-delaware',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/milford-delaware',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MilfordPage() {
  return <PageClient />;
}
