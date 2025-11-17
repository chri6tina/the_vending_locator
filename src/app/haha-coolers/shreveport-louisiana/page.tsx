import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Shreveport, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Shreveport, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Shreveport businesses.',
  keywords: 'haha coolers Shreveport, smart vending Shreveport Louisiana, grab and go cooler Shreveport, cashless vending Shreveport',
  openGraph: {
    title: 'Haha Smart Coolers in Shreveport, Louisiana',
    description: 'Revolutionary grab & go vending technology for Shreveport businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/shreveport-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/shreveport-louisiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ShreveportLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
