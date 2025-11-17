import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Brooklyn Park, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Brooklyn Park, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Brooklyn Park, vending leads Minnesota, Brooklyn Park vending opportunities, commercial vending locations, vending machine business Brooklyn Park',
  openGraph: {
    title: 'Vending Machine Locations in Brooklyn Park, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Brooklyn Park, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/brooklyn-park-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/brooklyn-park-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BrooklynParkMinnesotaVendingLeadsPage() {
  return <PageClient />;
}
