import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Boulder, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Boulder, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Boulder businesses.',
  keywords: 'haha coolers Boulder, smart vending Boulder Colorado, grab and go cooler Boulder, cashless vending Boulder',
  openGraph: {
    title: 'Haha Smart Coolers in Boulder, Colorado',
    description: 'Revolutionary grab & go vending technology for Boulder businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/boulder-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/boulder-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BoulderColoradoCoolerPageMetadata() {
  return <PageClient />;
}
