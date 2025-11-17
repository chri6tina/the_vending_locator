import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Coachella, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Coachella, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Coachella businesses.',
  keywords: 'haha coolers Coachella, smart vending Coachella California, grab and go cooler Coachella, cashless vending Coachella',
  openGraph: {
    title: 'Haha Smart Coolers in Coachella, California',
    description: 'Revolutionary grab & go vending technology for Coachella businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/coachella-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/coachella-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CoachellaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
