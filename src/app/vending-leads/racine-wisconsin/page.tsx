import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Racine, Wisconsin | Premium Lead Database',
  description: `Access verified vending machine locations in Racine, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Racine, vending leads Wisconsin, Racine vending opportunities, commercial vending locations, vending machine business Racine',
  openGraph: {
    title: 'Vending Machine Locations in Racine, Wisconsin | Premium Lead Database',
    description: `Access verified vending machine locations in Racine, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/racine-wisconsin',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/racine-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function RacineWisconsinVendingLeadsPage() {
  return <PageClient />;
}