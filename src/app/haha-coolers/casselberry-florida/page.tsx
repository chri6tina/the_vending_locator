import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Casselberry, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Casselberry, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Casselberry businesses.',
  keywords: 'haha coolers Casselberry, smart vending Casselberry Florida, grab and go cooler Casselberry, cashless vending Casselberry',
  openGraph: {
    title: 'Haha Smart Coolers in Casselberry, Florida',
    description: 'Revolutionary grab & go vending technology for Casselberry businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/casselberry-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/casselberry-florida',
  },
};

export default function CasselberryFloridaCoolerPageMetadata() {
  return <PageClient />;
}
