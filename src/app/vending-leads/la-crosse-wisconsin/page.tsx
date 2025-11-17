import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in La Crosse, Wisconsin | Premium Lead Database',
  description: `Access verified vending machine locations in La Crosse, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations La Crosse, vending leads Wisconsin, La Crosse vending opportunities, commercial vending locations, vending machine business La Crosse',
  openGraph: {
    title: 'Vending Machine Locations in La Crosse, Wisconsin | Premium Lead Database',
    description: `Access verified vending machine locations in La Crosse, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/la-crosse-wisconsin',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/la-crosse-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LaCrosseWisconsinVendingLeadsPage() {
  return <PageClient />;
}
