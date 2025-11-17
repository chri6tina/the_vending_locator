import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Boston, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Boston, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Boston businesses.',
  keywords: 'haha coolers Boston, smart vending Boston Massachusetts, grab and go cooler Boston, cashless vending Boston',
  openGraph: {
    title: 'Haha Smart Coolers in Boston, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Boston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/boston-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/boston-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BostonMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
