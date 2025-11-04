import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Goose Creek, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Goose Creek, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Goose Creek, vending leads South Carolina, Goose Creek vending opportunities, commercial vending locations, vending machine business Goose Creek',
  openGraph: {
    title: 'Vending Machine Locations in Goose Creek, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Goose Creek, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/goose-creek-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/goose-creek-south-carolina',
  },
};

export default function GooseCreekSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}
