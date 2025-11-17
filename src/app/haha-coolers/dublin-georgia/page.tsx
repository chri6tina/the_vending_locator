import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dublin, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dublin, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dublin businesses.',
  keywords: 'haha coolers Dublin, smart vending Dublin Georgia, grab and go cooler Dublin, cashless vending Dublin',
  openGraph: {
    title: 'Haha Smart Coolers in Dublin, Georgia',
    description: 'Revolutionary grab & go vending technology for Dublin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dublin-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dublin-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DublinGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
