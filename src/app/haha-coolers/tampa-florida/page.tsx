import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tampa, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tampa, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tampa businesses.',
  keywords: 'haha coolers Tampa, smart vending Tampa Florida, grab and go cooler Tampa, cashless vending Tampa',
  openGraph: {
    title: 'Haha Smart Coolers in Tampa, Florida',
    description: 'Revolutionary grab & go vending technology for Tampa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tampa-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tampa-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TampaFloridaCoolerPageMetadata() {
  return <PageClient />;
}
