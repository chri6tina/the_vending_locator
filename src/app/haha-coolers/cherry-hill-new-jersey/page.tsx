import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cherry Hill, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cherry Hill, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cherry Hill businesses.',
  keywords: 'haha coolers Cherry Hill, smart vending Cherry Hill New Jersey, grab and go cooler Cherry Hill, cashless vending Cherry Hill',
  openGraph: {
    title: 'Haha Smart Coolers in Cherry Hill, New Jersey',
    description: 'Revolutionary grab & go vending technology for Cherry Hill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cherry-hill-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cherry-hill-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CherryHillNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
