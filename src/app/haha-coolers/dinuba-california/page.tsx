import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dinuba, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dinuba, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dinuba businesses.',
  keywords: 'haha coolers Dinuba, smart vending Dinuba California, grab and go cooler Dinuba, cashless vending Dinuba',
  openGraph: {
    title: 'Haha Smart Coolers in Dinuba, California',
    description: 'Revolutionary grab & go vending technology for Dinuba businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dinuba-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dinuba-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DinubaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
