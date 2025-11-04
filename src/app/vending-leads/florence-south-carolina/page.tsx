import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Florence, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Florence, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Florence, vending leads South Carolina, Florence vending opportunities, commercial vending locations, vending machine business Florence',
  openGraph: {
    title: 'Vending Machine Locations in Florence, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Florence, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/florence-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/florence-south-carolina',
  },
};

export default function FlorenceSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}
