import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elyria, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elyria, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elyria businesses.',
  keywords: 'haha coolers Elyria, smart vending Elyria Ohio, grab and go cooler Elyria, cashless vending Elyria',
  openGraph: {
    title: 'Haha Smart Coolers in Elyria, Ohio',
    description: 'Revolutionary grab & go vending technology for Elyria businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elyria-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elyria-ohio',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElyriaOhioCoolerPageMetadata() {
  return <PageClient />;
}
