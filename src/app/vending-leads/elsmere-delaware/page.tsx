import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Elsmere, Delaware | Premium Lead Database',
  description: 'Access verified vending machine locations in Elsmere, Delaware. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Elsmere, vending leads Delaware, Elsmere vending opportunities, vending machine business DE',
  openGraph: {
    title: 'Vending Machine Locations in Elsmere, Delaware | Premium Lead Database',
    description: 'Access verified vending machine locations in Elsmere, Delaware. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/elsmere-delaware',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/elsmere-delaware',
  },
};

export default function ElsmerePage() {
  return <PageClient />;
}
