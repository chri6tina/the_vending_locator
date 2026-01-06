import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Maple Grove, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Maple Grove, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Maple Grove, vending leads Minnesota, Maple Grove vending opportunities, commercial vending locations, vending machine business Maple Grove',
  openGraph: {
    title: 'Vending Machine Locations in Maple Grove, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Maple Grove, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/maple-grove-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/maple-grove-minnesota',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function MapleGroveMinnesotaVendingLeadsPage() {
  return <PageClient />;
}