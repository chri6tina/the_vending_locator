import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Anderson, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Anderson, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Anderson, vending leads South Carolina, Anderson vending opportunities, commercial vending locations, vending machine business Anderson',
  openGraph: {
    title: 'Vending Machine Locations in Anderson, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Anderson, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/anderson-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/anderson-south-carolina',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function AndersonSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}