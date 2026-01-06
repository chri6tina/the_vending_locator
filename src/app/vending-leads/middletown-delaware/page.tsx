import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Middletown, Delaware | Premium Lead Database',
  description: 'Access verified vending machine locations in Middletown, Delaware. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Middletown, vending leads Delaware, Middletown vending opportunities, vending machine business DE',
  openGraph: {
    title: 'Vending Machine Locations in Middletown, Delaware | Premium Lead Database',
    description: 'Access verified vending machine locations in Middletown, Delaware. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/middletown-delaware',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/middletown-delaware',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function MiddletownPage() {
  return <PageClient />;
}