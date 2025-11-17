import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Beaverton, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Beaverton, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Beaverton businesses.',
  keywords: 'haha coolers Beaverton, smart vending Beaverton Oregon, grab and go cooler Beaverton, cashless vending Beaverton',
  openGraph: {
    title: 'Haha Smart Coolers in Beaverton, Oregon',
    description: 'Revolutionary grab & go vending technology for Beaverton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/beaverton-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/beaverton-oregon',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BeavertonOregonCoolerPageMetadata() {
  return <PageClient />;
}
