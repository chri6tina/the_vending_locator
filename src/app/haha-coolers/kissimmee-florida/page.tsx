import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kissimmee, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kissimmee, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kissimmee businesses.',
  keywords: 'haha coolers Kissimmee, smart vending Kissimmee Florida, grab and go cooler Kissimmee, cashless vending Kissimmee',
  openGraph: {
    title: 'Haha Smart Coolers in Kissimmee, Florida',
    description: 'Revolutionary grab & go vending technology for Kissimmee businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kissimmee-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kissimmee-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KissimmeeFloridaCoolerPageMetadata() {
  return <PageClient />;
}
