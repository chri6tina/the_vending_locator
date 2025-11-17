import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mount Vernon, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mount Vernon, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mount Vernon businesses.',
  keywords: 'haha coolers Mount Vernon, smart vending Mount Vernon New York, grab and go cooler Mount Vernon, cashless vending Mount Vernon',
  openGraph: {
    title: 'Haha Smart Coolers in Mount Vernon, New York',
    description: 'Revolutionary grab & go vending technology for Mount Vernon businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mount-vernon-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mount-vernon-new-york',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MountVernonNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
