import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Lauderdale, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Lauderdale, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Lauderdale businesses.',
  keywords: 'haha coolers Fort Lauderdale, smart vending Fort Lauderdale Florida, grab and go cooler Fort Lauderdale, cashless vending Fort Lauderdale',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Lauderdale, Florida',
    description: 'Revolutionary grab & go vending technology for Fort Lauderdale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-lauderdale-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-lauderdale-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FortLauderdaleFloridaCoolerPageMetadata() {
  return <PageClient />;
}
