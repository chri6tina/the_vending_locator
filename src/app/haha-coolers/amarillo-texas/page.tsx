import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Amarillo, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Amarillo, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Amarillo businesses.',
  keywords: 'haha coolers Amarillo, smart vending Amarillo Texas, grab and go cooler Amarillo, cashless vending Amarillo',
  openGraph: {
    title: 'Haha Smart Coolers in Amarillo, Texas',
    description: 'Revolutionary grab & go vending technology for Amarillo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/amarillo-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/amarillo-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AmarilloTexasCoolerPageMetadata() {
  return <PageClient />;
}
