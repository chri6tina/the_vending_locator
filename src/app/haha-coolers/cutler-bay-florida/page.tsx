import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cutler Bay, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cutler Bay, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cutler Bay businesses.',
  keywords: 'haha coolers Cutler Bay, smart vending Cutler Bay Florida, grab and go cooler Cutler Bay, cashless vending Cutler Bay',
  openGraph: {
    title: 'Haha Smart Coolers in Cutler Bay, Florida',
    description: 'Revolutionary grab & go vending technology for Cutler Bay businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cutler-bay-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cutler-bay-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CutlerBayFloridaCoolerPageMetadata() {
  return <PageClient />;
}
