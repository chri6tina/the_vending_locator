import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gretna, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gretna, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gretna businesses.',
  keywords: 'haha coolers Gretna, smart vending Gretna Louisiana, grab and go cooler Gretna, cashless vending Gretna',
  openGraph: {
    title: 'Haha Smart Coolers in Gretna, Louisiana',
    description: 'Revolutionary grab & go vending technology for Gretna businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gretna-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gretna-louisiana',
  },
};

export default function GretnaLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
