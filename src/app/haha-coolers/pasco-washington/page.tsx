import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pasco, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pasco, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pasco businesses.',
  keywords: 'haha coolers Pasco, smart vending Pasco Washington, grab and go cooler Pasco, cashless vending Pasco',
  openGraph: {
    title: 'Haha Smart Coolers in Pasco, Washington',
    description: 'Revolutionary grab & go vending technology for Pasco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pasco-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pasco-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PascoWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
