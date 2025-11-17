import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in North Las Vegas, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in North Las Vegas, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for North Las Vegas businesses.',
  keywords: 'haha coolers North Las Vegas, smart vending North Las Vegas Nevada, grab and go cooler North Las Vegas, cashless vending North Las Vegas',
  openGraph: {
    title: 'Haha Smart Coolers in North Las Vegas, Nevada',
    description: 'Revolutionary grab & go vending technology for North Las Vegas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/north-las-vegas-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/north-las-vegas-nevada',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NorthLasVegasNevadaCoolerPageMetadata() {
  return <PageClient />;
}
