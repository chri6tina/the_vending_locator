import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bothell, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bothell, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bothell businesses.',
  keywords: 'haha coolers Bothell, smart vending Bothell Washington, grab and go cooler Bothell, cashless vending Bothell',
  openGraph: {
    title: 'Haha Smart Coolers in Bothell, Washington',
    description: 'Revolutionary grab & go vending technology for Bothell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bothell-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bothell-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BothellWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
