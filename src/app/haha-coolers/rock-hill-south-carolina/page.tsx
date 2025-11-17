import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rock Hill, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rock Hill, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rock Hill businesses.',
  keywords: 'haha coolers Rock Hill, smart vending Rock Hill South Carolina, grab and go cooler Rock Hill, cashless vending Rock Hill',
  openGraph: {
    title: 'Haha Smart Coolers in Rock Hill, South Carolina',
    description: 'Revolutionary grab & go vending technology for Rock Hill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rock-hill-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rock-hill-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RockHillSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
