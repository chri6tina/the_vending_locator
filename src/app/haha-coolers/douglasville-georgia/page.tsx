import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Douglasville, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Douglasville, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Douglasville businesses.',
  keywords: 'haha coolers Douglasville, smart vending Douglasville Georgia, grab and go cooler Douglasville, cashless vending Douglasville',
  openGraph: {
    title: 'Haha Smart Coolers in Douglasville, Georgia',
    description: 'Revolutionary grab & go vending technology for Douglasville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/douglasville-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/douglasville-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DouglasvilleGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
