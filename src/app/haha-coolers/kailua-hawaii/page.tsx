import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kailua, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kailua, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kailua businesses.',
  keywords: 'haha coolers Kailua, smart vending Kailua Hawaii, grab and go cooler Kailua, cashless vending Kailua',
  openGraph: {
    title: 'Haha Smart Coolers in Kailua, Hawaii',
    description: 'Revolutionary grab & go vending technology for Kailua businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kailua-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kailua-hawaii',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KailuaHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
