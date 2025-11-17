import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lafayette, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lafayette, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lafayette businesses.',
  keywords: 'haha coolers Lafayette, smart vending Lafayette Louisiana, grab and go cooler Lafayette, cashless vending Lafayette',
  openGraph: {
    title: 'Haha Smart Coolers in Lafayette, Louisiana',
    description: 'Revolutionary grab & go vending technology for Lafayette businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lafayette-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lafayette-louisiana',
  },
};

export default function LafayetteLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
