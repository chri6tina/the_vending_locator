import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Navy Yard, Washington DC | Premium Lead Database',
  description: 'Access verified vending machine locations in Navy Yard, Washington DC. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Navy Yard, vending leads Washington DC, Navy Yard vending opportunities, vending machine business DC',
  openGraph: {
    title: 'Vending Machine Locations in Navy Yard, Washington DC | Premium Lead Database',
    description: 'Access verified vending machine locations in Navy Yard, Washington DC. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/navy-yard-washington-dc',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/navy-yard-washington-dc',
  },
};

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function NavyYardPage() {
  return <PageClient />;
}