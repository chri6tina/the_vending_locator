import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Minot, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Minot, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Minot businesses.',
  keywords: 'haha coolers Minot, smart vending Minot North Dakota, grab and go cooler Minot, cashless vending Minot',
  openGraph: {
    title: 'Haha Smart Coolers in Minot, North Dakota',
    description: 'Revolutionary grab & go vending technology for Minot businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/minot-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/minot-north-dakota',
  },
};

export default function MinotNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
