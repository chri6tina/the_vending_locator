import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rock Springs, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rock Springs, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rock Springs businesses.',
  keywords: 'haha coolers Rock Springs, smart vending Rock Springs Wyoming, grab and go cooler Rock Springs, cashless vending Rock Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Rock Springs, Wyoming',
    description: 'Revolutionary grab & go vending technology for Rock Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rock-springs-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rock-springs-wyoming',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RockSpringsWyomingCoolerPageMetadata() {
  return <PageClient />;
}
