import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in McAllen, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in McAllen, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for McAllen businesses.',
  keywords: 'haha coolers McAllen, smart vending McAllen Texas, grab and go cooler McAllen, cashless vending McAllen',
  openGraph: {
    title: 'Haha Smart Coolers in McAllen, Texas',
    description: 'Revolutionary grab & go vending technology for McAllen businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mcallen-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mcallen-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function McAllenTexasCoolerPageMetadata() {
  return <PageClient />;
}
