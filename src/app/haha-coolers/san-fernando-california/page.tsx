import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Fernando, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Fernando, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Fernando businesses.',
  keywords: 'haha coolers San Fernando, smart vending San Fernando California, grab and go cooler San Fernando, cashless vending San Fernando',
  openGraph: {
    title: 'Haha Smart Coolers in San Fernando, California',
    description: 'Revolutionary grab & go vending technology for San Fernando businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-fernando-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-fernando-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanFernandoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
