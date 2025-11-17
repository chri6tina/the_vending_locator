import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Houma, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Houma, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Houma businesses.',
  keywords: 'haha coolers Houma, smart vending Houma Louisiana, grab and go cooler Houma, cashless vending Houma',
  openGraph: {
    title: 'Haha Smart Coolers in Houma, Louisiana',
    description: 'Revolutionary grab & go vending technology for Houma businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/houma-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/houma-louisiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HoumaLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
