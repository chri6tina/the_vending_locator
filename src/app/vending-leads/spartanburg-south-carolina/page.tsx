import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Spartanburg, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Spartanburg, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Spartanburg, vending leads South Carolina, Spartanburg vending opportunities, commercial vending locations, vending machine business Spartanburg',
  openGraph: {
    title: 'Vending Machine Locations in Spartanburg, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Spartanburg, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/spartanburg-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/spartanburg-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function SpartanburgSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}