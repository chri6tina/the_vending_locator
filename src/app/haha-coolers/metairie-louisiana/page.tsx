import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Metairie, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Metairie, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Metairie businesses.',
  keywords: 'haha coolers Metairie, smart vending Metairie Louisiana, grab and go cooler Metairie, cashless vending Metairie',
  openGraph: {
    title: 'Haha Smart Coolers in Metairie, Louisiana',
    description: 'Revolutionary grab & go vending technology for Metairie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/metairie-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/metairie-louisiana',
  },
};

export default function MetairieLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
