import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newark, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newark, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newark businesses.',
  keywords: 'haha coolers Newark, smart vending Newark New Jersey, grab and go cooler Newark, cashless vending Newark',
  openGraph: {
    title: 'Haha Smart Coolers in Newark, New Jersey',
    description: 'Revolutionary grab & go vending technology for Newark businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newark-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newark-new-jersey',
  },
};

export default function NewarkNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
