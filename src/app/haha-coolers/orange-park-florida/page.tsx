import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Orange Park, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Orange Park, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Orange Park businesses.',
  keywords: 'haha coolers Orange Park, smart vending Orange Park Florida, grab and go cooler Orange Park, cashless vending Orange Park',
  openGraph: {
    title: 'Haha Smart Coolers in Orange Park, Florida',
    description: 'Revolutionary grab & go vending technology for Orange Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/orange-park-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/orange-park-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OrangeParkFloridaCoolerPageMetadata() {
  return <PageClient />;
}
