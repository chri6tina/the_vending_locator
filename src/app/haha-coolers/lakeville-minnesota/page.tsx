import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lakeville, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lakeville, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lakeville businesses.',
  keywords: 'haha coolers Lakeville, smart vending Lakeville Minnesota, grab and go cooler Lakeville, cashless vending Lakeville',
  openGraph: {
    title: 'Haha Smart Coolers in Lakeville, Minnesota',
    description: 'Revolutionary grab & go vending technology for Lakeville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lakeville-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lakeville-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LakevilleMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
