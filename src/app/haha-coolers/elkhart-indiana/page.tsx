import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elkhart, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elkhart, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elkhart businesses.',
  keywords: 'haha coolers Elkhart, smart vending Elkhart Indiana, grab and go cooler Elkhart, cashless vending Elkhart',
  openGraph: {
    title: 'Haha Smart Coolers in Elkhart, Indiana',
    description: 'Revolutionary grab & go vending technology for Elkhart businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elkhart-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elkhart-indiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ElkhartIndianaCoolerPageMetadata() {
  return <PageClient />;
}
