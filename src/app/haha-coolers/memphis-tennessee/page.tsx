import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Memphis, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Memphis, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Memphis businesses.',
  keywords: 'haha coolers Memphis, smart vending Memphis Tennessee, grab and go cooler Memphis, cashless vending Memphis',
  openGraph: {
    title: 'Haha Smart Coolers in Memphis, Tennessee',
    description: 'Revolutionary grab & go vending technology for Memphis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/memphis-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/memphis-tennessee',
  },
};

export default function MemphisTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
