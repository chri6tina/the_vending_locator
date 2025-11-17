import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Camarillo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Camarillo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Camarillo businesses.',
  keywords: 'haha coolers Camarillo, smart vending Camarillo California, grab and go cooler Camarillo, cashless vending Camarillo',
  openGraph: {
    title: 'Haha Smart Coolers in Camarillo, California',
    description: 'Revolutionary grab & go vending technology for Camarillo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/camarillo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/camarillo-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CamarilloCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
