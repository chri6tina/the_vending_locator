import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lynchburg, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lynchburg, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lynchburg businesses.',
  keywords: 'haha coolers Lynchburg, smart vending Lynchburg Virginia, grab and go cooler Lynchburg, cashless vending Lynchburg',
  openGraph: {
    title: 'Haha Smart Coolers in Lynchburg, Virginia',
    description: 'Revolutionary grab & go vending technology for Lynchburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lynchburg-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lynchburg-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LynchburgVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
