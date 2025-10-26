import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Frankfort, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Frankfort, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Frankfort, vending leads Kentucky, Frankfort vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Frankfort, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Frankfort, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/frankfort-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/frankfort-kentucky',
  },
};

export default function FrankfortPage() {
  return <PageClient />;
}
