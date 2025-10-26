import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in New Castle, Delaware | Premium Lead Database',
  description: 'Access verified vending machine locations in New Castle, Delaware. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations New Castle, vending leads Delaware, New Castle vending opportunities, vending machine business DE',
  openGraph: {
    title: 'Vending Machine Locations in New Castle, Delaware | Premium Lead Database',
    description: 'Access verified vending machine locations in New Castle, Delaware. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/new-castle-delaware',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/new-castle-delaware',
  },
};

export default function NewCastlePage() {
  return <PageClient />;
}
