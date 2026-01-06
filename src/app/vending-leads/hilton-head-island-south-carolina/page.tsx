import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Hilton Head Island, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Hilton Head Island, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Hilton Head Island, vending leads South Carolina, Hilton Head Island vending opportunities, commercial vending locations, vending machine business Hilton Head Island',
  openGraph: {
    title: 'Vending Machine Locations in Hilton Head Island, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Hilton Head Island, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/hilton-head-island-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/hilton-head-island-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function HiltonHeadIslandSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}