import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fontana, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fontana, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fontana businesses.',
  keywords: 'haha coolers Fontana, smart vending Fontana California, grab and go cooler Fontana, cashless vending Fontana',
  openGraph: {
    title: 'Haha Smart Coolers in Fontana, California',
    description: 'Revolutionary grab & go vending technology for Fontana businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fontana-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fontana-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FontanaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
