import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hutchinson, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hutchinson, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hutchinson businesses.',
  keywords: 'haha coolers Hutchinson, smart vending Hutchinson Kansas, grab and go cooler Hutchinson, cashless vending Hutchinson',
  openGraph: {
    title: 'Haha Smart Coolers in Hutchinson, Kansas',
    description: 'Revolutionary grab & go vending technology for Hutchinson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hutchinson-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hutchinson-kansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HutchinsonKansasCoolerPageMetadata() {
  return <PageClient />;
}
