import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Biloxi, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Biloxi, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Biloxi businesses.',
  keywords: 'haha coolers Biloxi, smart vending Biloxi Mississippi, grab and go cooler Biloxi, cashless vending Biloxi',
  openGraph: {
    title: 'Haha Smart Coolers in Biloxi, Mississippi',
    description: 'Revolutionary grab & go vending technology for Biloxi businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/biloxi-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/biloxi-mississippi',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BiloxiMississippiCoolerPageMetadata() {
  return <PageClient />;
}
