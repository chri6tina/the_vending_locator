import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Monrovia, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Monrovia, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Monrovia businesses.',
  keywords: 'haha coolers Monrovia, smart vending Monrovia California, grab and go cooler Monrovia, cashless vending Monrovia',
  openGraph: {
    title: 'Haha Smart Coolers in Monrovia, California',
    description: 'Revolutionary grab & go vending technology for Monrovia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/monrovia-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/monrovia-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MonroviaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
