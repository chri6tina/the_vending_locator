import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Albany, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Albany, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Albany businesses.',
  keywords: 'haha coolers Albany, smart vending Albany Oregon, grab and go cooler Albany, cashless vending Albany',
  openGraph: {
    title: 'Haha Smart Coolers in Albany, Oregon',
    description: 'Revolutionary grab & go vending technology for Albany businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/albany-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/albany-oregon',
  },
};

export default function AlbanyOregonCoolerPageMetadata() {
  return <PageClient />;
}
