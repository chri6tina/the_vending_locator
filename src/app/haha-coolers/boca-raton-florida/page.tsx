import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Boca Raton, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Boca Raton, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Boca Raton businesses.',
  keywords: 'haha coolers Boca Raton, smart vending Boca Raton Florida, grab and go cooler Boca Raton, cashless vending Boca Raton',
  openGraph: {
    title: 'Haha Smart Coolers in Boca Raton, Florida',
    description: 'Revolutionary grab & go vending technology for Boca Raton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/boca-raton-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/boca-raton-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BocaRatonFloridaCoolerPageMetadata() {
  return <PageClient />;
}
