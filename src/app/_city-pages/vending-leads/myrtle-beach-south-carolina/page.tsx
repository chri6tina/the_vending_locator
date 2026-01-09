import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Myrtle Beach, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Myrtle Beach, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Myrtle Beach, vending leads South Carolina, Myrtle Beach vending opportunities, commercial vending locations, vending machine business Myrtle Beach',
  openGraph: {
    title: 'Vending Machine Locations in Myrtle Beach, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Myrtle Beach, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/myrtle-beach-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/myrtle-beach-south-carolina',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function MyrtleBeachSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}