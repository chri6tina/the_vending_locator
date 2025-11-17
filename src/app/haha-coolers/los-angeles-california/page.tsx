import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Los Angeles, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Los Angeles, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Los Angeles businesses.',
  keywords: 'haha coolers Los Angeles, smart vending Los Angeles California, grab and go cooler Los Angeles, cashless vending Los Angeles',
  openGraph: {
    title: 'Haha Smart Coolers in Los Angeles, California',
    description: 'Revolutionary grab & go vending technology for Los Angeles businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/los-angeles-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/los-angeles-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LosAngelesCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
