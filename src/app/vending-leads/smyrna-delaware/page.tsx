import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Smyrna, Delaware | Premium Lead Database',
  description: 'Access verified vending machine locations in Smyrna, Delaware. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Smyrna, vending leads Delaware, Smyrna vending opportunities, vending machine business DE',
  openGraph: {
    title: 'Vending Machine Locations in Smyrna, Delaware | Premium Lead Database',
    description: 'Access verified vending machine locations in Smyrna, Delaware. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/smyrna-delaware',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/smyrna-delaware',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function SmyrnaPage() {
  return <PageClient />;
}