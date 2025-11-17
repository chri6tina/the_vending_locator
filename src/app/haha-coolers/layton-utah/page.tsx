import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Layton, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Layton, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Layton businesses.',
  keywords: 'haha coolers Layton, smart vending Layton Utah, grab and go cooler Layton, cashless vending Layton',
  openGraph: {
    title: 'Haha Smart Coolers in Layton, Utah',
    description: 'Revolutionary grab & go vending technology for Layton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/layton-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/layton-utah',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LaytonUtahCoolerPageMetadata() {
  return <PageClient />;
}
