import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Clifton, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Clifton, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Clifton businesses.',
  keywords: 'haha coolers Clifton, smart vending Clifton New Jersey, grab and go cooler Clifton, cashless vending Clifton',
  openGraph: {
    title: 'Haha Smart Coolers in Clifton, New Jersey',
    description: 'Revolutionary grab & go vending technology for Clifton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/clifton-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/clifton-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CliftonNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
