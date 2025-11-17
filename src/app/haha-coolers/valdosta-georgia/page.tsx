import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Valdosta, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Valdosta, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Valdosta businesses.',
  keywords: 'haha coolers Valdosta, smart vending Valdosta Georgia, grab and go cooler Valdosta, cashless vending Valdosta',
  openGraph: {
    title: 'Haha Smart Coolers in Valdosta, Georgia',
    description: 'Revolutionary grab & go vending technology for Valdosta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/valdosta-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/valdosta-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ValdostaGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
