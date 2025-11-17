import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bellflower, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bellflower, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bellflower businesses.',
  keywords: 'haha coolers Bellflower, smart vending Bellflower California, grab and go cooler Bellflower, cashless vending Bellflower',
  openGraph: {
    title: 'Haha Smart Coolers in Bellflower, California',
    description: 'Revolutionary grab & go vending technology for Bellflower businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bellflower-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bellflower-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BellflowerCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
