import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in St. Albans, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in St. Albans, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for St. Albans businesses.',
  keywords: 'haha coolers St. Albans, smart vending St. Albans Vermont, grab and go cooler St. Albans, cashless vending St. Albans',
  openGraph: {
    title: 'Haha Smart Coolers in St. Albans, Vermont',
    description: 'Revolutionary grab & go vending technology for St. Albans businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/st.-albans-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/st.-albans-vermont',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function StAlbansVermontCoolerPageMetadata() {
  return <PageClient />;
}
