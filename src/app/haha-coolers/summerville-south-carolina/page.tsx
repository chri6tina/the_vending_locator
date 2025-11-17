import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Summerville, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Summerville, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Summerville businesses.',
  keywords: 'haha coolers Summerville, smart vending Summerville South Carolina, grab and go cooler Summerville, cashless vending Summerville',
  openGraph: {
    title: 'Haha Smart Coolers in Summerville, South Carolina',
    description: 'Revolutionary grab & go vending technology for Summerville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/summerville-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/summerville-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SummervilleSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
