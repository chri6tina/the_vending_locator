import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in St. Cloud, Minnesota | Premium Lead Database',
  description: `Access verified vending machine locations in St. Cloud, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations St. Cloud, vending leads Minnesota, St. Cloud vending opportunities, commercial vending locations, vending machine business St. Cloud',
  openGraph: {
    title: 'Vending Machine Locations in St. Cloud, Minnesota | Premium Lead Database',
    description: `Access verified vending machine locations in St. Cloud, Minnesota. Get high-quality leads for hospitals, offices, schools, and corporate facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/st-cloud-minnesota',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/st-cloud-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function StCloudMinnesotaVendingLeadsPage() {
  return <PageClient />;
}
