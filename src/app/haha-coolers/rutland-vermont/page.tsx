import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rutland, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rutland, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rutland businesses.',
  keywords: 'haha coolers Rutland, smart vending Rutland Vermont, grab and go cooler Rutland, cashless vending Rutland',
  openGraph: {
    title: 'Haha Smart Coolers in Rutland, Vermont',
    description: 'Revolutionary grab & go vending technology for Rutland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rutland-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rutland-vermont',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RutlandVermontCoolerPageMetadata() {
  return <PageClient />;
}
