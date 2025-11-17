import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Burbank, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Burbank, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Burbank businesses.',
  keywords: 'haha coolers Burbank, smart vending Burbank California, grab and go cooler Burbank, cashless vending Burbank',
  openGraph: {
    title: 'Haha Smart Coolers in Burbank, California',
    description: 'Revolutionary grab & go vending technology for Burbank businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/burbank-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/burbank-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BurbankCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
