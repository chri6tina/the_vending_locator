import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Melbourne, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Melbourne, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Melbourne businesses.',
  keywords: 'haha coolers Melbourne, smart vending Melbourne Florida, grab and go cooler Melbourne, cashless vending Melbourne',
  openGraph: {
    title: 'Haha Smart Coolers in Melbourne, Florida',
    description: 'Revolutionary grab & go vending technology for Melbourne businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/melbourne-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/melbourne-florida',
  },
};

export default function MelbourneFloridaCoolerPageMetadata() {
  return <PageClient />;
}
