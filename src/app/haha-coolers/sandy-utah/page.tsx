import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sandy, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sandy, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sandy businesses.',
  keywords: 'haha coolers Sandy, smart vending Sandy Utah, grab and go cooler Sandy, cashless vending Sandy',
  openGraph: {
    title: 'Haha Smart Coolers in Sandy, Utah',
    description: 'Revolutionary grab & go vending technology for Sandy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sandy-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sandy-utah',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SandyUtahCoolerPageMetadata() {
  return <PageClient />;
}
