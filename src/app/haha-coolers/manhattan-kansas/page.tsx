import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Manhattan, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Manhattan, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Manhattan businesses.',
  keywords: 'haha coolers Manhattan, smart vending Manhattan Kansas, grab and go cooler Manhattan, cashless vending Manhattan',
  openGraph: {
    title: 'Haha Smart Coolers in Manhattan, Kansas',
    description: 'Revolutionary grab & go vending technology for Manhattan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/manhattan-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/manhattan-kansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ManhattanKansasCoolerPageMetadata() {
  return <PageClient />;
}
