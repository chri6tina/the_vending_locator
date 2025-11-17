import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Greenville, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Greenville, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Greenville businesses.',
  keywords: 'haha coolers Greenville, smart vending Greenville Mississippi, grab and go cooler Greenville, cashless vending Greenville',
  openGraph: {
    title: 'Haha Smart Coolers in Greenville, Mississippi',
    description: 'Revolutionary grab & go vending technology for Greenville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/greenville-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/greenville-mississippi',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GreenvilleMississippiCoolerPageMetadata() {
  return <PageClient />;
}
