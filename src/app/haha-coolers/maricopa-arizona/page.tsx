import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Maricopa, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Maricopa, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Maricopa businesses.',
  keywords: 'haha coolers Maricopa, smart vending Maricopa Arizona, grab and go cooler Maricopa, cashless vending Maricopa',
  openGraph: {
    title: 'Haha Smart Coolers in Maricopa, Arizona',
    description: 'Revolutionary grab & go vending technology for Maricopa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/maricopa-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/maricopa-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MaricopaArizonaCoolerPageMetadata() {
  return <PageClient />;
}
