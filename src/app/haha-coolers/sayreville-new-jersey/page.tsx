import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sayreville, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sayreville, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sayreville businesses.',
  keywords: 'haha coolers Sayreville, smart vending Sayreville New Jersey, grab and go cooler Sayreville, cashless vending Sayreville',
  openGraph: {
    title: 'Haha Smart Coolers in Sayreville, New Jersey',
    description: 'Revolutionary grab & go vending technology for Sayreville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sayreville-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sayreville-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SayrevilleNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
