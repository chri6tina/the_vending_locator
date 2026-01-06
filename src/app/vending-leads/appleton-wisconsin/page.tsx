import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Appleton, Wisconsin | Premium Lead Database',
  description: `Access verified vending machine locations in Appleton, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Appleton, vending leads Wisconsin, Appleton vending opportunities, commercial vending locations, vending machine business Appleton',
  openGraph: {
    title: 'Vending Machine Locations in Appleton, Wisconsin | Premium Lead Database',
    description: `Access verified vending machine locations in Appleton, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/appleton-wisconsin',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/appleton-wisconsin',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function AppletonWisconsinVendingLeadsPage() {
  return <PageClient />;
}