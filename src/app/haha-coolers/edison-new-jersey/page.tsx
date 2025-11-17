import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Edison, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Edison, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Edison businesses.',
  keywords: 'haha coolers Edison, smart vending Edison New Jersey, grab and go cooler Edison, cashless vending Edison',
  openGraph: {
    title: 'Haha Smart Coolers in Edison, New Jersey',
    description: 'Revolutionary grab & go vending technology for Edison businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/edison-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/edison-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EdisonNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
