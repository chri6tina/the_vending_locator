import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waco, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waco, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waco businesses.',
  keywords: 'haha coolers Waco, smart vending Waco Texas, grab and go cooler Waco, cashless vending Waco',
  openGraph: {
    title: 'Haha Smart Coolers in Waco, Texas',
    description: 'Revolutionary grab & go vending technology for Waco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waco-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waco-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WacoTexasCoolerPageMetadata() {
  return <PageClient />;
}
