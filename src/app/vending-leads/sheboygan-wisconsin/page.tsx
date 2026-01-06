import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Sheboygan, Wisconsin | Premium Lead Database',
  description: `Access verified vending machine locations in Sheboygan, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Sheboygan, vending leads Wisconsin, Sheboygan vending opportunities, commercial vending locations, vending machine business Sheboygan',
  openGraph: {
    title: 'Vending Machine Locations in Sheboygan, Wisconsin | Premium Lead Database',
    description: `Access verified vending machine locations in Sheboygan, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/sheboygan-wisconsin',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/sheboygan-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function SheboyganWisconsinVendingLeadsPage() {
  return <PageClient />;
}