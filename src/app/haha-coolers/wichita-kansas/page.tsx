import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wichita, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wichita, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wichita businesses.',
  keywords: 'haha coolers Wichita, smart vending Wichita Kansas, grab and go cooler Wichita, cashless vending Wichita',
  openGraph: {
    title: 'Haha Smart Coolers in Wichita, Kansas',
    description: 'Revolutionary grab & go vending technology for Wichita businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wichita-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wichita-kansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WichitaKansasCoolerPageMetadata() {
  return <PageClient />;
}
