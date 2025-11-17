import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Covina, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Covina, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Covina businesses.',
  keywords: 'haha coolers West Covina, smart vending West Covina California, grab and go cooler West Covina, cashless vending West Covina',
  openGraph: {
    title: 'Haha Smart Coolers in West Covina, California',
    description: 'Revolutionary grab & go vending technology for West Covina businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-covina-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-covina-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WestCovinaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
