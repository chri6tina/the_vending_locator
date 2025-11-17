import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rockford, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rockford, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rockford businesses.',
  keywords: 'haha coolers Rockford, smart vending Rockford Illinois, grab and go cooler Rockford, cashless vending Rockford',
  openGraph: {
    title: 'Haha Smart Coolers in Rockford, Illinois',
    description: 'Revolutionary grab & go vending technology for Rockford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rockford-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rockford-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RockfordIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
