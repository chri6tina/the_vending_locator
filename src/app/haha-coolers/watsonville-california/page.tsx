import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Watsonville, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Watsonville, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Watsonville businesses.',
  keywords: 'haha coolers Watsonville, smart vending Watsonville California, grab and go cooler Watsonville, cashless vending Watsonville',
  openGraph: {
    title: 'Haha Smart Coolers in Watsonville, California',
    description: 'Revolutionary grab & go vending technology for Watsonville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/watsonville-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/watsonville-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WatsonvilleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
