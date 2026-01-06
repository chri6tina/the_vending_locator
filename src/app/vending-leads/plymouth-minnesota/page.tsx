import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Plymouth, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Plymouth, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Plymouth, vending leads Minnesota, Plymouth vending opportunities, commercial vending locations, vending machine business Plymouth',
  openGraph: {
    title: 'Vending Machine Locations in Plymouth, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Plymouth, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/plymouth-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/plymouth-minnesota',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function PlymouthMinnesotaVendingLeadsPage() {
  return <PageClient />;
}