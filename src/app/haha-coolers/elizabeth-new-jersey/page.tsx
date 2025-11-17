import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elizabeth, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elizabeth, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elizabeth businesses.',
  keywords: 'haha coolers Elizabeth, smart vending Elizabeth New Jersey, grab and go cooler Elizabeth, cashless vending Elizabeth',
  openGraph: {
    title: 'Haha Smart Coolers in Elizabeth, New Jersey',
    description: 'Revolutionary grab & go vending technology for Elizabeth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elizabeth-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elizabeth-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElizabethNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
