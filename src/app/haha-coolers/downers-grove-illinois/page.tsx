import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Downers Grove, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Downers Grove, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Downers Grove businesses.',
  keywords: 'haha coolers Downers Grove, smart vending Downers Grove Illinois, grab and go cooler Downers Grove, cashless vending Downers Grove',
  openGraph: {
    title: 'Haha Smart Coolers in Downers Grove, Illinois',
    description: 'Revolutionary grab & go vending technology for Downers Grove businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/downers-grove-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/downers-grove-illinois',
  },
};

export default function DownersGroveIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
