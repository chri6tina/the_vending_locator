import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Casa Grande, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Casa Grande, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Casa Grande businesses.',
  keywords: 'haha coolers Casa Grande, smart vending Casa Grande Arizona, grab and go cooler Casa Grande, cashless vending Casa Grande',
  openGraph: {
    title: 'Haha Smart Coolers in Casa Grande, Arizona',
    description: 'Revolutionary grab & go vending technology for Casa Grande businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/casa-grande-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/casa-grande-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CasaGrandeArizonaCoolerPageMetadata() {
  return <PageClient />;
}
