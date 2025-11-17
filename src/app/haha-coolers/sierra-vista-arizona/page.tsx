import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sierra Vista, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sierra Vista, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sierra Vista businesses.',
  keywords: 'haha coolers Sierra Vista, smart vending Sierra Vista Arizona, grab and go cooler Sierra Vista, cashless vending Sierra Vista',
  openGraph: {
    title: 'Haha Smart Coolers in Sierra Vista, Arizona',
    description: 'Revolutionary grab & go vending technology for Sierra Vista businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sierra-vista-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sierra-vista-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SierraVistaArizonaCoolerPageMetadata() {
  return <PageClient />;
}
