import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Costa Mesa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Costa Mesa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Costa Mesa businesses.',
  keywords: 'haha coolers Costa Mesa, smart vending Costa Mesa California, grab and go cooler Costa Mesa, cashless vending Costa Mesa',
  openGraph: {
    title: 'Haha Smart Coolers in Costa Mesa, California',
    description: 'Revolutionary grab & go vending technology for Costa Mesa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/costa-mesa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/costa-mesa-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CostaMesaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
