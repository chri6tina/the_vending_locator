import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Norfolk, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Norfolk, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Norfolk businesses.',
  keywords: 'haha coolers Norfolk, smart vending Norfolk Nebraska, grab and go cooler Norfolk, cashless vending Norfolk',
  openGraph: {
    title: 'Haha Smart Coolers in Norfolk, Nebraska',
    description: 'Revolutionary grab & go vending technology for Norfolk businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/norfolk-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/norfolk-nebraska',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NorfolkNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
