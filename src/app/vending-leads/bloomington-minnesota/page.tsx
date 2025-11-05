import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Bloomington, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in Bloomington, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Bloomington, vending leads Minnesota, Bloomington vending opportunities, commercial vending locations, vending machine business Bloomington',
  openGraph: {
    title: 'Vending Machine Locations in Bloomington, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in Bloomington, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/bloomington-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/bloomington-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BloomingtonMinnesotaVendingLeadsPage() {
  return <PageClient />;
}
