import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rolling Meadows, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rolling Meadows, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rolling Meadows businesses.',
  keywords: 'haha coolers Rolling Meadows, smart vending Rolling Meadows Illinois, grab and go cooler Rolling Meadows, cashless vending Rolling Meadows',
  openGraph: {
    title: 'Haha Smart Coolers in Rolling Meadows, Illinois',
    description: 'Revolutionary grab & go vending technology for Rolling Meadows businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rolling-meadows-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rolling-meadows-illinois',
  },
};

export default function RollingMeadowsIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
