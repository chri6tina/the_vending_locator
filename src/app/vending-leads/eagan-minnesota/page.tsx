import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Eagan, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Eagan, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Eagan, vending leads Minnesota, Eagan vending opportunities, commercial vending locations, vending machine business Eagan',
  openGraph: {
    title: 'Vending Machine Locations in Eagan, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Eagan, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/eagan-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/eagan-minnesota',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function EaganMinnesotaVendingLeadsPage() {
  return <PageClient />;
}