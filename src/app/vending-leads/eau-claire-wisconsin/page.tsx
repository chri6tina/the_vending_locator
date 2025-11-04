import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Eau Claire, Wisconsin | Premium Lead Database',
  description: `Access verified vending machine locations in Eau Claire, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Eau Claire, vending leads Wisconsin, Eau Claire vending opportunities, commercial vending locations, vending machine business Eau Claire',
  openGraph: {
    title: 'Vending Machine Locations in Eau Claire, Wisconsin | Premium Lead Database',
    description: `Access verified vending machine locations in Eau Claire, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/eau-claire-wisconsin',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/eau-claire-wisconsin',
  },
};

export default function EauClaireWisconsinVendingLeadsPage() {
  return <PageClient />;
}
