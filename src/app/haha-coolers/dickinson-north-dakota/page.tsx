import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dickinson, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dickinson, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dickinson businesses.',
  keywords: 'haha coolers Dickinson, smart vending Dickinson North Dakota, grab and go cooler Dickinson, cashless vending Dickinson',
  openGraph: {
    title: 'Haha Smart Coolers in Dickinson, North Dakota',
    description: 'Revolutionary grab & go vending technology for Dickinson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dickinson-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dickinson-north-dakota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DickinsonNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
