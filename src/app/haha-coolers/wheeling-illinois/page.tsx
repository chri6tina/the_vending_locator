import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wheeling, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wheeling, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wheeling businesses.',
  keywords: 'haha coolers Wheeling, smart vending Wheeling Illinois, grab and go cooler Wheeling, cashless vending Wheeling',
  openGraph: {
    title: 'Haha Smart Coolers in Wheeling, Illinois',
    description: 'Revolutionary grab & go vending technology for Wheeling businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wheeling-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wheeling-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WheelingIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
