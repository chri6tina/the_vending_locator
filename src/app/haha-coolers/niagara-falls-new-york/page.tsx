import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Niagara Falls, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Niagara Falls, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Niagara Falls businesses.',
  keywords: 'haha coolers Niagara Falls, smart vending Niagara Falls New York, grab and go cooler Niagara Falls, cashless vending Niagara Falls',
  openGraph: {
    title: 'Haha Smart Coolers in Niagara Falls, New York',
    description: 'Revolutionary grab & go vending technology for Niagara Falls businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/niagara-falls-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/niagara-falls-new-york',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NiagaraFallsNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
