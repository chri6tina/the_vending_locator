import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bellingham, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bellingham, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bellingham businesses.',
  keywords: 'haha coolers Bellingham, smart vending Bellingham Washington, grab and go cooler Bellingham, cashless vending Bellingham',
  openGraph: {
    title: 'Haha Smart Coolers in Bellingham, Washington',
    description: 'Revolutionary grab & go vending technology for Bellingham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bellingham-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bellingham-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BellinghamWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
