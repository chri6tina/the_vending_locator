import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Milledgeville, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Milledgeville, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Milledgeville businesses.',
  keywords: 'haha coolers Milledgeville, smart vending Milledgeville Georgia, grab and go cooler Milledgeville, cashless vending Milledgeville',
  openGraph: {
    title: 'Haha Smart Coolers in Milledgeville, Georgia',
    description: 'Revolutionary grab & go vending technology for Milledgeville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/milledgeville-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/milledgeville-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MilledgevilleGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
