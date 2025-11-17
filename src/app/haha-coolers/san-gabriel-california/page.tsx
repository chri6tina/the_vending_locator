import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Gabriel, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Gabriel, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Gabriel businesses.',
  keywords: 'haha coolers San Gabriel, smart vending San Gabriel California, grab and go cooler San Gabriel, cashless vending San Gabriel',
  openGraph: {
    title: 'Haha Smart Coolers in San Gabriel, California',
    description: 'Revolutionary grab & go vending technology for San Gabriel businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-gabriel-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-gabriel-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanGabrielCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
