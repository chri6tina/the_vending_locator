import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sandy Springs, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sandy Springs, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sandy Springs businesses.',
  keywords: 'haha coolers Sandy Springs, smart vending Sandy Springs Georgia, grab and go cooler Sandy Springs, cashless vending Sandy Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Sandy Springs, Georgia',
    description: 'Revolutionary grab & go vending technology for Sandy Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sandy-springs-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sandy-springs-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SandySpringsGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
