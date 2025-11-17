import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Richmond, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Richmond, Kentucky. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Richmond, vending leads Kentucky, Richmond vending opportunities, vending machine business KY',
  openGraph: {
    title: 'Vending Machine Locations in Richmond, Kentucky | Premium Lead Database',
    description: 'Access verified vending machine locations in Richmond, Kentucky. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/richmond-kentucky',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/richmond-kentucky',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RichmondPage() {
  return <PageClient />;
}
