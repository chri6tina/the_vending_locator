import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chattanooga, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chattanooga, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chattanooga businesses.',
  keywords: 'haha coolers Chattanooga, smart vending Chattanooga Tennessee, grab and go cooler Chattanooga, cashless vending Chattanooga',
  openGraph: {
    title: 'Haha Smart Coolers in Chattanooga, Tennessee',
    description: 'Revolutionary grab & go vending technology for Chattanooga businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chattanooga-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chattanooga-tennessee',
  },
};

export default function ChattanoogaTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
