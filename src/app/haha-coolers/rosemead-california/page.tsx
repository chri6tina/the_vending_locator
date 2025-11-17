import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rosemead, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rosemead, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rosemead businesses.',
  keywords: 'haha coolers Rosemead, smart vending Rosemead California, grab and go cooler Rosemead, cashless vending Rosemead',
  openGraph: {
    title: 'Haha Smart Coolers in Rosemead, California',
    description: 'Revolutionary grab & go vending technology for Rosemead businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rosemead-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rosemead-california',
  },
};

export default function RosemeadCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
