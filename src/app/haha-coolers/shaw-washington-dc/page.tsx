import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Shaw, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Shaw, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Shaw businesses.',
  keywords: 'haha coolers Shaw, smart vending Shaw Washington DC, grab and go cooler Shaw, cashless vending Shaw',
  openGraph: {
    title: 'Haha Smart Coolers in Shaw, Washington DC',
    description: 'Revolutionary grab & go vending technology for Shaw businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/shaw-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/shaw-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ShawWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
