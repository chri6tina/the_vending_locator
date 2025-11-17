import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Commerce City, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Commerce City, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Commerce City businesses.',
  keywords: 'haha coolers Commerce City, smart vending Commerce City Colorado, grab and go cooler Commerce City, cashless vending Commerce City',
  openGraph: {
    title: 'Haha Smart Coolers in Commerce City, Colorado',
    description: 'Revolutionary grab & go vending technology for Commerce City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/commerce-city-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/commerce-city-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CommerceCityColoradoCoolerPageMetadata() {
  return <PageClient />;
}
