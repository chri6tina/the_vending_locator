import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Florence, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Florence, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Florence businesses.',
  keywords: 'haha coolers Florence, smart vending Florence Kentucky, grab and go cooler Florence, cashless vending Florence',
  openGraph: {
    title: 'Haha Smart Coolers in Florence, Kentucky',
    description: 'Revolutionary grab & go vending technology for Florence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/florence-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/florence-kentucky',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FlorenceKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
