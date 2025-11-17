import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kearny, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kearny, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kearny businesses.',
  keywords: 'haha coolers Kearny, smart vending Kearny New Jersey, grab and go cooler Kearny, cashless vending Kearny',
  openGraph: {
    title: 'Haha Smart Coolers in Kearny, New Jersey',
    description: 'Revolutionary grab & go vending technology for Kearny businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kearny-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kearny-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KearnyNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
