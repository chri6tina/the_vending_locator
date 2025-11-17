import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carmel, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carmel, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carmel businesses.',
  keywords: 'haha coolers Carmel, smart vending Carmel Indiana, grab and go cooler Carmel, cashless vending Carmel',
  openGraph: {
    title: 'Haha Smart Coolers in Carmel, Indiana',
    description: 'Revolutionary grab & go vending technology for Carmel businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carmel-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carmel-indiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CarmelIndianaCoolerPageMetadata() {
  return <PageClient />;
}
