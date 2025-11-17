import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Moline, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Moline, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Moline businesses.',
  keywords: 'haha coolers Moline, smart vending Moline Illinois, grab and go cooler Moline, cashless vending Moline',
  openGraph: {
    title: 'Haha Smart Coolers in Moline, Illinois',
    description: 'Revolutionary grab & go vending technology for Moline businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/moline-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/moline-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MolineIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
