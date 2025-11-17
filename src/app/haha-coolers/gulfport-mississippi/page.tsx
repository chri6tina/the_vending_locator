import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gulfport, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gulfport, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gulfport businesses.',
  keywords: 'haha coolers Gulfport, smart vending Gulfport Mississippi, grab and go cooler Gulfport, cashless vending Gulfport',
  openGraph: {
    title: 'Haha Smart Coolers in Gulfport, Mississippi',
    description: 'Revolutionary grab & go vending technology for Gulfport businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gulfport-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gulfport-mississippi',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GulfportMississippiCoolerPageMetadata() {
  return <PageClient />;
}
