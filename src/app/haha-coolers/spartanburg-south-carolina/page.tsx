import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Spartanburg, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Spartanburg, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Spartanburg businesses.',
  keywords: 'haha coolers Spartanburg, smart vending Spartanburg South Carolina, grab and go cooler Spartanburg, cashless vending Spartanburg',
  openGraph: {
    title: 'Haha Smart Coolers in Spartanburg, South Carolina',
    description: 'Revolutionary grab & go vending technology for Spartanburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/spartanburg-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/spartanburg-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SpartanburgSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
