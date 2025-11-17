import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Charlottesville, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Charlottesville, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Charlottesville businesses.',
  keywords: 'haha coolers Charlottesville, smart vending Charlottesville Virginia, grab and go cooler Charlottesville, cashless vending Charlottesville',
  openGraph: {
    title: 'Haha Smart Coolers in Charlottesville, Virginia',
    description: 'Revolutionary grab & go vending technology for Charlottesville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/charlottesville-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/charlottesville-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CharlottesvilleVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
