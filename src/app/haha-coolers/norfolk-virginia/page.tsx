import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Norfolk, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Norfolk, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Norfolk businesses.',
  keywords: 'haha coolers Norfolk, smart vending Norfolk Virginia, grab and go cooler Norfolk, cashless vending Norfolk',
  openGraph: {
    title: 'Haha Smart Coolers in Norfolk, Virginia',
    description: 'Revolutionary grab & go vending technology for Norfolk businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/norfolk-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/norfolk-virginia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NorfolkVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
