import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Smyrna, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Smyrna, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Smyrna businesses.',
  keywords: 'haha coolers Smyrna, smart vending Smyrna Georgia, grab and go cooler Smyrna, cashless vending Smyrna',
  openGraph: {
    title: 'Haha Smart Coolers in Smyrna, Georgia',
    description: 'Revolutionary grab & go vending technology for Smyrna businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/smyrna-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/smyrna-georgia',
  },
};

export default function SmyrnaGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
