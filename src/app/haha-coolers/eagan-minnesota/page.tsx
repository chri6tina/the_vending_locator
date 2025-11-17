import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Eagan, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Eagan, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Eagan businesses.',
  keywords: 'haha coolers Eagan, smart vending Eagan Minnesota, grab and go cooler Eagan, cashless vending Eagan',
  openGraph: {
    title: 'Haha Smart Coolers in Eagan, Minnesota',
    description: 'Revolutionary grab & go vending technology for Eagan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/eagan-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/eagan-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function EaganMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
