import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Nashville, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Nashville, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Nashville businesses.',
  keywords: 'haha coolers Nashville, smart vending Nashville Tennessee, grab and go cooler Nashville, cashless vending Nashville',
  openGraph: {
    title: 'Haha Smart Coolers in Nashville, Tennessee',
    description: 'Revolutionary grab & go vending technology for Nashville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/nashville-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/nashville-tennessee',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NashvilleTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
