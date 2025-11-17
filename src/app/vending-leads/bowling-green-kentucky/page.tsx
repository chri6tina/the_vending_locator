import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Bowling Green, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Bowling Green, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Bowling Green, vending leads Kentucky, Bowling Green vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Bowling Green, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Bowling Green, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/bowling-green-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/bowling-green-kentucky',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BowlingGreenPage() {
  return <PageClient />;
}
