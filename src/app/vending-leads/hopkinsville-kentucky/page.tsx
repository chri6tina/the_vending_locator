import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Hopkinsville, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Hopkinsville, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Hopkinsville, vending leads Kentucky, Hopkinsville vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Hopkinsville, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Hopkinsville, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/hopkinsville-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/hopkinsville-kentucky',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HopkinsvillePage() {
  return <PageClient />;
}
