import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Grand Junction, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Grand Junction, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Grand Junction businesses.',
  keywords: 'haha coolers Grand Junction, smart vending Grand Junction Colorado, grab and go cooler Grand Junction, cashless vending Grand Junction',
  openGraph: {
    title: 'Haha Smart Coolers in Grand Junction, Colorado',
    description: 'Revolutionary grab & go vending technology for Grand Junction businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/grand-junction-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/grand-junction-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GrandJunctionColoradoCoolerPageMetadata() {
  return <PageClient />;
}
