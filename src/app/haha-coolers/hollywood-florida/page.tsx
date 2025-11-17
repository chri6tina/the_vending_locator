import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hollywood, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hollywood, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hollywood businesses.',
  keywords: 'haha coolers Hollywood, smart vending Hollywood Florida, grab and go cooler Hollywood, cashless vending Hollywood',
  openGraph: {
    title: 'Haha Smart Coolers in Hollywood, Florida',
    description: 'Revolutionary grab & go vending technology for Hollywood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hollywood-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hollywood-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HollywoodFloridaCoolerPageMetadata() {
  return <PageClient />;
}
