import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Lakeville, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Lakeville, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Lakeville, vending leads Minnesota, Lakeville vending opportunities, commercial vending locations, vending machine business Lakeville',
  openGraph: {
    title: 'Vending Machine Locations in Lakeville, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Lakeville, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/lakeville-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/lakeville-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LakevilleMinnesotaVendingLeadsPage() {
  return <PageClient />;
}
