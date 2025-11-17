import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Jose, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Jose, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Jose businesses.',
  keywords: 'haha coolers San Jose, smart vending San Jose California, grab and go cooler San Jose, cashless vending San Jose',
  openGraph: {
    title: 'Haha Smart Coolers in San Jose, California',
    description: 'Revolutionary grab & go vending technology for San Jose businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-jose-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-jose-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SanJoseCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
