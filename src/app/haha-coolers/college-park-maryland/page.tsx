import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in College Park, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in College Park, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for College Park businesses.',
  keywords: 'haha coolers College Park, smart vending College Park Maryland, grab and go cooler College Park, cashless vending College Park',
  openGraph: {
    title: 'Haha Smart Coolers in College Park, Maryland',
    description: 'Revolutionary grab & go vending technology for College Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/college-park-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/college-park-maryland',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CollegeParkMarylandCoolerPageMetadata() {
  return <PageClient />;
}
