import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Georgetown, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Georgetown, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Georgetown, vending leads Kentucky, Georgetown vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Georgetown, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Georgetown, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/georgetown-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/georgetown-kentucky',
  },
};

export default function GeorgetownPage() {
  return <PageClient />;
}
