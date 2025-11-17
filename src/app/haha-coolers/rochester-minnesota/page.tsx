import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rochester, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rochester, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rochester businesses.',
  keywords: 'haha coolers Rochester, smart vending Rochester Minnesota, grab and go cooler Rochester, cashless vending Rochester',
  openGraph: {
    title: 'Haha Smart Coolers in Rochester, Minnesota',
    description: 'Revolutionary grab & go vending technology for Rochester businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rochester-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rochester-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RochesterMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
