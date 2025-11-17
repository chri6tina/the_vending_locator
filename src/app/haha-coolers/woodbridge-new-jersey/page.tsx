import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Woodbridge, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Woodbridge, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Woodbridge businesses.',
  keywords: 'haha coolers Woodbridge, smart vending Woodbridge New Jersey, grab and go cooler Woodbridge, cashless vending Woodbridge',
  openGraph: {
    title: 'Haha Smart Coolers in Woodbridge, New Jersey',
    description: 'Revolutionary grab & go vending technology for Woodbridge businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/woodbridge-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/woodbridge-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WoodbridgeNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
