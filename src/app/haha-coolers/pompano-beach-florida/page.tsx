import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pompano Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pompano Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pompano Beach businesses.',
  keywords: 'haha coolers Pompano Beach, smart vending Pompano Beach Florida, grab and go cooler Pompano Beach, cashless vending Pompano Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Pompano Beach, Florida',
    description: 'Revolutionary grab & go vending technology for Pompano Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pompano-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pompano-beach-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PompanoBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
