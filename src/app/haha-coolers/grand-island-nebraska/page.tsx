import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Grand Island, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Grand Island, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Grand Island businesses.',
  keywords: 'haha coolers Grand Island, smart vending Grand Island Nebraska, grab and go cooler Grand Island, cashless vending Grand Island',
  openGraph: {
    title: 'Haha Smart Coolers in Grand Island, Nebraska',
    description: 'Revolutionary grab & go vending technology for Grand Island businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/grand-island-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/grand-island-nebraska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GrandIslandNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
