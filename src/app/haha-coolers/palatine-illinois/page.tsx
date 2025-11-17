import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palatine, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palatine, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palatine businesses.',
  keywords: 'haha coolers Palatine, smart vending Palatine Illinois, grab and go cooler Palatine, cashless vending Palatine',
  openGraph: {
    title: 'Haha Smart Coolers in Palatine, Illinois',
    description: 'Revolutionary grab & go vending technology for Palatine businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palatine-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palatine-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PalatineIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
