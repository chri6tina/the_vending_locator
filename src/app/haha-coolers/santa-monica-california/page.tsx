import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Monica, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Monica, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Monica businesses.',
  keywords: 'haha coolers Santa Monica, smart vending Santa Monica California, grab and go cooler Santa Monica, cashless vending Santa Monica',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Monica, California',
    description: 'Revolutionary grab & go vending technology for Santa Monica businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-monica-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-monica-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SantaMonicaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
