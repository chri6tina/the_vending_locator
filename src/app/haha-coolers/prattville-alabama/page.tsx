import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Prattville, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Prattville, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Prattville businesses.',
  keywords: 'haha coolers Prattville, smart vending Prattville Alabama, grab and go cooler Prattville, cashless vending Prattville',
  openGraph: {
    title: 'Haha Smart Coolers in Prattville, Alabama',
    description: 'Revolutionary grab & go vending technology for Prattville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/prattville-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/prattville-alabama',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PrattvilleAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
