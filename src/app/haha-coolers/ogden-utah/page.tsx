import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ogden, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ogden, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ogden businesses.',
  keywords: 'haha coolers Ogden, smart vending Ogden Utah, grab and go cooler Ogden, cashless vending Ogden',
  openGraph: {
    title: 'Haha Smart Coolers in Ogden, Utah',
    description: 'Revolutionary grab & go vending technology for Ogden businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ogden-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ogden-utah',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OgdenUtahCoolerPageMetadata() {
  return <PageClient />;
}
