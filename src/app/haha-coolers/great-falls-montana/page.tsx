import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Great Falls, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Great Falls, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Great Falls businesses.',
  keywords: 'haha coolers Great Falls, smart vending Great Falls Montana, grab and go cooler Great Falls, cashless vending Great Falls',
  openGraph: {
    title: 'Haha Smart Coolers in Great Falls, Montana',
    description: 'Revolutionary grab & go vending technology for Great Falls businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/great-falls-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/great-falls-montana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GreatFallsMontanaCoolerPageMetadata() {
  return <PageClient />;
}
