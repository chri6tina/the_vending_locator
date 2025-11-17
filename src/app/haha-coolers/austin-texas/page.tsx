import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Austin, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Austin, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Austin businesses.',
  keywords: 'haha coolers Austin, smart vending Austin Texas, grab and go cooler Austin, cashless vending Austin',
  openGraph: {
    title: 'Haha Smart Coolers in Austin, Texas',
    description: 'Revolutionary grab & go vending technology for Austin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/austin-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/austin-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AustinTexasCoolerPageMetadata() {
  return <PageClient />;
}
