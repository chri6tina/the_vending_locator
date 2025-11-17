import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Denton, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Denton, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Denton businesses.',
  keywords: 'haha coolers Denton, smart vending Denton Texas, grab and go cooler Denton, cashless vending Denton',
  openGraph: {
    title: 'Haha Smart Coolers in Denton, Texas',
    description: 'Revolutionary grab & go vending technology for Denton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/denton-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/denton-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DentonTexasCoolerPageMetadata() {
  return <PageClient />;
}
