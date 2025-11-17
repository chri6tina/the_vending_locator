import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hampton, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hampton, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hampton businesses.',
  keywords: 'haha coolers Hampton, smart vending Hampton Virginia, grab and go cooler Hampton, cashless vending Hampton',
  openGraph: {
    title: 'Haha Smart Coolers in Hampton, Virginia',
    description: 'Revolutionary grab & go vending technology for Hampton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hampton-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hampton-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HamptonVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
