import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Morgantown, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Morgantown, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Morgantown businesses.',
  keywords: 'haha coolers Morgantown, smart vending Morgantown West Virginia, grab and go cooler Morgantown, cashless vending Morgantown',
  openGraph: {
    title: 'Haha Smart Coolers in Morgantown, West Virginia',
    description: 'Revolutionary grab & go vending technology for Morgantown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/morgantown-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/morgantown-west-virginia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MorgantownWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
