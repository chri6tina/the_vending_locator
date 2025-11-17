import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rexburg, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rexburg, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rexburg businesses.',
  keywords: 'haha coolers Rexburg, smart vending Rexburg Idaho, grab and go cooler Rexburg, cashless vending Rexburg',
  openGraph: {
    title: 'Haha Smart Coolers in Rexburg, Idaho',
    description: 'Revolutionary grab & go vending technology for Rexburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rexburg-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rexburg-idaho',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RexburgIdahoCoolerPageMetadata() {
  return <PageClient />;
}
