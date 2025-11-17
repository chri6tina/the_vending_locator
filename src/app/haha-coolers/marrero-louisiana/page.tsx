import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Marrero, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Marrero, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Marrero businesses.',
  keywords: 'haha coolers Marrero, smart vending Marrero Louisiana, grab and go cooler Marrero, cashless vending Marrero',
  openGraph: {
    title: 'Haha Smart Coolers in Marrero, Louisiana',
    description: 'Revolutionary grab & go vending technology for Marrero businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/marrero-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/marrero-louisiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MarreroLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
