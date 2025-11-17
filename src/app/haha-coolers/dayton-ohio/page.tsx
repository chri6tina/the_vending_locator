import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dayton, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dayton, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dayton businesses.',
  keywords: 'haha coolers Dayton, smart vending Dayton Ohio, grab and go cooler Dayton, cashless vending Dayton',
  openGraph: {
    title: 'Haha Smart Coolers in Dayton, Ohio',
    description: 'Revolutionary grab & go vending technology for Dayton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dayton-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dayton-ohio',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DaytonOhioCoolerPageMetadata() {
  return <PageClient />;
}
