import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Savannah, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Savannah, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Savannah businesses.',
  keywords: 'haha coolers Savannah, smart vending Savannah Georgia, grab and go cooler Savannah, cashless vending Savannah',
  openGraph: {
    title: 'Haha Smart Coolers in Savannah, Georgia',
    description: 'Revolutionary grab & go vending technology for Savannah businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/savannah-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/savannah-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SavannahGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
