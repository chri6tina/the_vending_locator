import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lenexa, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lenexa, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lenexa businesses.',
  keywords: 'haha coolers Lenexa, smart vending Lenexa Kansas, grab and go cooler Lenexa, cashless vending Lenexa',
  openGraph: {
    title: 'Haha Smart Coolers in Lenexa, Kansas',
    description: 'Revolutionary grab & go vending technology for Lenexa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lenexa-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lenexa-kansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LenexaKansasCoolerPageMetadata() {
  return <PageClient />;
}
