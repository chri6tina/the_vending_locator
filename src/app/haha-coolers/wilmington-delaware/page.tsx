import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wilmington, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wilmington, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wilmington businesses.',
  keywords: 'haha coolers Wilmington, smart vending Wilmington Delaware, grab and go cooler Wilmington, cashless vending Wilmington',
  openGraph: {
    title: 'Haha Smart Coolers in Wilmington, Delaware',
    description: 'Revolutionary grab & go vending technology for Wilmington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wilmington-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wilmington-delaware',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WilmingtonDelawareCoolerPageMetadata() {
  return <PageClient />;
}
