import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hesperia, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hesperia, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hesperia businesses.',
  keywords: 'haha coolers Hesperia, smart vending Hesperia California, grab and go cooler Hesperia, cashless vending Hesperia',
  openGraph: {
    title: 'Haha Smart Coolers in Hesperia, California',
    description: 'Revolutionary grab & go vending technology for Hesperia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hesperia-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hesperia-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HesperiaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
