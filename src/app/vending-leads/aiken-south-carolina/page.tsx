import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Aiken, South Carolina | Premium Lead Database',
  description: `Access verified vending machine locations in Aiken, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Aiken, vending leads South Carolina, Aiken vending opportunities, commercial vending locations, vending machine business Aiken',
  openGraph: {
    title: 'Vending Machine Locations in Aiken, South Carolina | Premium Lead Database',
    description: `Access verified vending machine locations in Aiken, South Carolina. Get high-quality leads for hospitals, offices, schools, and business facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/aiken-south-carolina',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/aiken-south-carolina',
  },
};

export default function AikenSouthCarolinaVendingLeadsPage() {
  return <PageClient />;
}
