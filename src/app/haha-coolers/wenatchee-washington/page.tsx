import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wenatchee, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wenatchee, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wenatchee businesses.',
  keywords: 'haha coolers Wenatchee, smart vending Wenatchee Washington, grab and go cooler Wenatchee, cashless vending Wenatchee',
  openGraph: {
    title: 'Haha Smart Coolers in Wenatchee, Washington',
    description: 'Revolutionary grab & go vending technology for Wenatchee businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wenatchee-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wenatchee-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WenatcheeWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
