import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Davenport, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Davenport, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Davenport businesses.',
  keywords: 'haha coolers Davenport, smart vending Davenport Iowa, grab and go cooler Davenport, cashless vending Davenport',
  openGraph: {
    title: 'Haha Smart Coolers in Davenport, Iowa',
    description: 'Revolutionary grab & go vending technology for Davenport businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/davenport-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/davenport-iowa',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DavenportIowaCoolerPageMetadata() {
  return <PageClient />;
}
