import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Norwalk, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Norwalk, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Norwalk businesses.',
  keywords: 'haha coolers Norwalk, smart vending Norwalk Connecticut, grab and go cooler Norwalk, cashless vending Norwalk',
  openGraph: {
    title: 'Haha Smart Coolers in Norwalk, Connecticut',
    description: 'Revolutionary grab & go vending technology for Norwalk businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/norwalk-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/norwalk-connecticut',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NorwalkConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
