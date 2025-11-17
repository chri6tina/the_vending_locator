import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Castle Rock, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Castle Rock, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Castle Rock businesses.',
  keywords: 'haha coolers Castle Rock, smart vending Castle Rock Colorado, grab and go cooler Castle Rock, cashless vending Castle Rock',
  openGraph: {
    title: 'Haha Smart Coolers in Castle Rock, Colorado',
    description: 'Revolutionary grab & go vending technology for Castle Rock businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/castle-rock-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/castle-rock-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CastleRockColoradoCoolerPageMetadata() {
  return <PageClient />;
}
