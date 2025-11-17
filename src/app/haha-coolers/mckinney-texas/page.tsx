import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in McKinney, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in McKinney, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for McKinney businesses.',
  keywords: 'haha coolers McKinney, smart vending McKinney Texas, grab and go cooler McKinney, cashless vending McKinney',
  openGraph: {
    title: 'Haha Smart Coolers in McKinney, Texas',
    description: 'Revolutionary grab & go vending technology for McKinney businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mckinney-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mckinney-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function McKinneyTexasCoolerPageMetadata() {
  return <PageClient />;
}
