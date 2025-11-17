import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Margate, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Margate, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Margate businesses.',
  keywords: 'haha coolers Margate, smart vending Margate Florida, grab and go cooler Margate, cashless vending Margate',
  openGraph: {
    title: 'Haha Smart Coolers in Margate, Florida',
    description: 'Revolutionary grab & go vending technology for Margate businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/margate-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/margate-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MargateFloridaCoolerPageMetadata() {
  return <PageClient />;
}
