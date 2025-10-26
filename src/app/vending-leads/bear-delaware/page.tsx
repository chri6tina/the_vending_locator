import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Bear, Delaware | Premium Lead Database',
  description: 'Access verified vending machine locations in Bear, Delaware. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Bear, vending leads Delaware, Bear vending opportunities, vending machine business DE',
  openGraph: {
    title: 'Vending Machine Locations in Bear, Delaware | Premium Lead Database',
    description: 'Access verified vending machine locations in Bear, Delaware. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/bear-delaware',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/bear-delaware',
  },
};

export default function BearPage() {
  return <PageClient />;
}
