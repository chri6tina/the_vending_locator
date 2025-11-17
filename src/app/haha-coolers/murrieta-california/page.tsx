import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Murrieta, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Murrieta, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Murrieta businesses.',
  keywords: 'haha coolers Murrieta, smart vending Murrieta California, grab and go cooler Murrieta, cashless vending Murrieta',
  openGraph: {
    title: 'Haha Smart Coolers in Murrieta, California',
    description: 'Revolutionary grab & go vending technology for Murrieta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/murrieta-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/murrieta-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MurrietaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
