import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Olathe, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Olathe, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Olathe businesses.',
  keywords: 'haha coolers Olathe, smart vending Olathe Kansas, grab and go cooler Olathe, cashless vending Olathe',
  openGraph: {
    title: 'Haha Smart Coolers in Olathe, Kansas',
    description: 'Revolutionary grab & go vending technology for Olathe businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/olathe-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/olathe-kansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function OlatheKansasCoolerPageMetadata() {
  return <PageClient />;
}
