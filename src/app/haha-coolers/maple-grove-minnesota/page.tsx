import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Maple Grove, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Maple Grove, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Maple Grove businesses.',
  keywords: 'haha coolers Maple Grove, smart vending Maple Grove Minnesota, grab and go cooler Maple Grove, cashless vending Maple Grove',
  openGraph: {
    title: 'Haha Smart Coolers in Maple Grove, Minnesota',
    description: 'Revolutionary grab & go vending technology for Maple Grove businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/maple-grove-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/maple-grove-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MapleGroveMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
