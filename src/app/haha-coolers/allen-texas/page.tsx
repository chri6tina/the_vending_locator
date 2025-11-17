import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Allen, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Allen, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Allen businesses.',
  keywords: 'haha coolers Allen, smart vending Allen Texas, grab and go cooler Allen, cashless vending Allen',
  openGraph: {
    title: 'Haha Smart Coolers in Allen, Texas',
    description: 'Revolutionary grab & go vending technology for Allen businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/allen-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/allen-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AllenTexasCoolerPageMetadata() {
  return <PageClient />;
}
