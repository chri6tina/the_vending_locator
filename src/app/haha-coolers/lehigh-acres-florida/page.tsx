import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lehigh Acres, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lehigh Acres, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lehigh Acres businesses.',
  keywords: 'haha coolers Lehigh Acres, smart vending Lehigh Acres Florida, grab and go cooler Lehigh Acres, cashless vending Lehigh Acres',
  openGraph: {
    title: 'Haha Smart Coolers in Lehigh Acres, Florida',
    description: 'Revolutionary grab & go vending technology for Lehigh Acres businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lehigh-acres-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lehigh-acres-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LehighAcresFloridaCoolerPageMetadata() {
  return <PageClient />;
}
