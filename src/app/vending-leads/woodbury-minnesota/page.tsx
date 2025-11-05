import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Woodbury, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Woodbury, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Woodbury, vending leads Minnesota, Woodbury vending opportunities, commercial vending locations, vending machine business Woodbury',
  openGraph: {
    title: 'Vending Machine Locations in Woodbury, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Woodbury, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/woodbury-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/woodbury-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WoodburyMinnesotaVendingLeadsPage() {
  return <PageClient />;
}
