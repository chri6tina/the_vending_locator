import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ashland, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ashland, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ashland businesses.',
  keywords: 'haha coolers Ashland, smart vending Ashland Kentucky, grab and go cooler Ashland, cashless vending Ashland',
  openGraph: {
    title: 'Haha Smart Coolers in Ashland, Kentucky',
    description: 'Revolutionary grab & go vending technology for Ashland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ashland-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ashland-kentucky',
  },
};

export default function AshlandKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
