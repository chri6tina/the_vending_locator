import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Arlington Heights, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Arlington Heights, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Arlington Heights businesses.',
  keywords: 'haha coolers Arlington Heights, smart vending Arlington Heights Illinois, grab and go cooler Arlington Heights, cashless vending Arlington Heights',
  openGraph: {
    title: 'Haha Smart Coolers in Arlington Heights, Illinois',
    description: 'Revolutionary grab & go vending technology for Arlington Heights businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/arlington-heights-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/arlington-heights-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ArlingtonHeightsIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
