import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bartlett, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bartlett, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bartlett businesses.',
  keywords: 'haha coolers Bartlett, smart vending Bartlett Illinois, grab and go cooler Bartlett, cashless vending Bartlett',
  openGraph: {
    title: 'Haha Smart Coolers in Bartlett, Illinois',
    description: 'Revolutionary grab & go vending technology for Bartlett businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bartlett-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bartlett-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BartlettIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
