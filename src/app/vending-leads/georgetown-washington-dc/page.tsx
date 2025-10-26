import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Georgetown, Washington DC | Premium Lead Database',
  description: 'Access verified vending machine locations in Georgetown, Washington DC. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Georgetown, vending leads Washington DC, Georgetown vending opportunities, vending machine business DC',
  openGraph: {
    title: 'Vending Machine Locations in Georgetown, Washington DC | Premium Lead Database',
    description: 'Access verified vending machine locations in Georgetown, Washington DC. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/georgetown-washington-dc',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/georgetown-washington-dc',
  },
};

export default function GeorgetownPage() {
  return <PageClient />;
}
