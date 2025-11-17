import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Leavenworth, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Leavenworth, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Leavenworth businesses.',
  keywords: 'haha coolers Leavenworth, smart vending Leavenworth Kansas, grab and go cooler Leavenworth, cashless vending Leavenworth',
  openGraph: {
    title: 'Haha Smart Coolers in Leavenworth, Kansas',
    description: 'Revolutionary grab & go vending technology for Leavenworth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/leavenworth-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/leavenworth-kansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LeavenworthKansasCoolerPageMetadata() {
  return <PageClient />;
}
