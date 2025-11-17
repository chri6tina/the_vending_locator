import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Springfield, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Springfield, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Springfield businesses.',
  keywords: 'haha coolers Springfield, smart vending Springfield Massachusetts, grab and go cooler Springfield, cashless vending Springfield',
  openGraph: {
    title: 'Haha Smart Coolers in Springfield, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Springfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/springfield-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/springfield-massachusetts',
  },
};

export default function SpringfieldMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
