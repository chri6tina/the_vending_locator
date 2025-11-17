import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dallas, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dallas, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dallas businesses.',
  keywords: 'haha coolers Dallas, smart vending Dallas Texas, grab and go cooler Dallas, cashless vending Dallas',
  openGraph: {
    title: 'Haha Smart Coolers in Dallas, Texas',
    description: 'Revolutionary grab & go vending technology for Dallas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dallas-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dallas-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DallasTexasCoolerPageMetadata() {
  return <PageClient />;
}
