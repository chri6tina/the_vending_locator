import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lynnwood, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lynnwood, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lynnwood businesses.',
  keywords: 'haha coolers Lynnwood, smart vending Lynnwood Washington, grab and go cooler Lynnwood, cashless vending Lynnwood',
  openGraph: {
    title: 'Haha Smart Coolers in Lynnwood, Washington',
    description: 'Revolutionary grab & go vending technology for Lynnwood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lynnwood-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lynnwood-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LynnwoodWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
