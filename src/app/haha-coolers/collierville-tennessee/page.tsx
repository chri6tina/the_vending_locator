import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Collierville, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Collierville, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Collierville businesses.',
  keywords: 'haha coolers Collierville, smart vending Collierville Tennessee, grab and go cooler Collierville, cashless vending Collierville',
  openGraph: {
    title: 'Haha Smart Coolers in Collierville, Tennessee',
    description: 'Revolutionary grab & go vending technology for Collierville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/collierville-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/collierville-tennessee',
  },
};

export default function ColliervilleTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
