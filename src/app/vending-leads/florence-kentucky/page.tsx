import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Florence, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Florence, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Florence, vending leads Kentucky, Florence vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Florence, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Florence, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/florence-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/florence-kentucky',
  },
};

export default function FlorencePage() {
  return <PageClient />;
}
