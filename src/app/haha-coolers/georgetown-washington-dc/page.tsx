import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Georgetown, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Georgetown, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Georgetown businesses.',
  keywords: 'haha coolers Georgetown, smart vending Georgetown Washington DC, grab and go cooler Georgetown, cashless vending Georgetown',
  openGraph: {
    title: 'Haha Smart Coolers in Georgetown, Washington DC',
    description: 'Revolutionary grab & go vending technology for Georgetown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/georgetown-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/georgetown-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GeorgetownWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
