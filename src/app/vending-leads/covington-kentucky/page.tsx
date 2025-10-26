import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Covington, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Covington, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Covington, vending leads Kentucky, Covington vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Covington, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Covington, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/covington-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/covington-kentucky',
  },
};

export default function CovingtonPage() {
  return <PageClient />;
}
