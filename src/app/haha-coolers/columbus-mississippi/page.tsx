import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Columbus, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Columbus, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Columbus businesses.',
  keywords: 'haha coolers Columbus, smart vending Columbus Mississippi, grab and go cooler Columbus, cashless vending Columbus',
  openGraph: {
    title: 'Haha Smart Coolers in Columbus, Mississippi',
    description: 'Revolutionary grab & go vending technology for Columbus businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/columbus-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/columbus-mississippi',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ColumbusMississippiCoolerPageMetadata() {
  return <PageClient />;
}
