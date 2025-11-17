import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Corvallis, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Corvallis, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Corvallis businesses.',
  keywords: 'haha coolers Corvallis, smart vending Corvallis Oregon, grab and go cooler Corvallis, cashless vending Corvallis',
  openGraph: {
    title: 'Haha Smart Coolers in Corvallis, Oregon',
    description: 'Revolutionary grab & go vending technology for Corvallis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/corvallis-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/corvallis-oregon',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CorvallisOregonCoolerPageMetadata() {
  return <PageClient />;
}
