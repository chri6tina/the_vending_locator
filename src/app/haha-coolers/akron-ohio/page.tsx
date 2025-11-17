import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Akron, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Akron, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Akron businesses.',
  keywords: 'haha coolers Akron, smart vending Akron Ohio, grab and go cooler Akron, cashless vending Akron',
  openGraph: {
    title: 'Haha Smart Coolers in Akron, Ohio',
    description: 'Revolutionary grab & go vending technology for Akron businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/akron-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/akron-ohio',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AkronOhioCoolerPageMetadata() {
  return <PageClient />;
}
