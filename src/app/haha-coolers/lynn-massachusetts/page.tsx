import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lynn, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lynn, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lynn businesses.',
  keywords: 'haha coolers Lynn, smart vending Lynn Massachusetts, grab and go cooler Lynn, cashless vending Lynn',
  openGraph: {
    title: 'Haha Smart Coolers in Lynn, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Lynn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lynn-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lynn-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LynnMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
