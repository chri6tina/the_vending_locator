import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Summerville, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Summerville, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Summerville, vending leads South Carolina, Summerville vending opportunities, commercial vending locations, vending machine business Summerville',
  openGraph: {
    title: 'Vending Machine Locations in Summerville, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Summerville, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/summerville-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/summerville-south-carolina',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function SummervilleSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}