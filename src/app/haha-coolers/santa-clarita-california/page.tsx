import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Clarita, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Clarita, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Clarita businesses.',
  keywords: 'haha coolers Santa Clarita, smart vending Santa Clarita California, grab and go cooler Santa Clarita, cashless vending Santa Clarita',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Clarita, California',
    description: 'Revolutionary grab & go vending technology for Santa Clarita businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-clarita-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-clarita-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SantaClaritaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
