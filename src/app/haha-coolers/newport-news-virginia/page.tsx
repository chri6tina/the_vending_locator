import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newport News, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newport News, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newport News businesses.',
  keywords: 'haha coolers Newport News, smart vending Newport News Virginia, grab and go cooler Newport News, cashless vending Newport News',
  openGraph: {
    title: 'Haha Smart Coolers in Newport News, Virginia',
    description: 'Revolutionary grab & go vending technology for Newport News businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newport-news-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newport-news-virginia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NewportNewsVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
