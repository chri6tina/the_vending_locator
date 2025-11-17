import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Smyrna, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Smyrna, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Smyrna businesses.',
  keywords: 'haha coolers Smyrna, smart vending Smyrna Delaware, grab and go cooler Smyrna, cashless vending Smyrna',
  openGraph: {
    title: 'Haha Smart Coolers in Smyrna, Delaware',
    description: 'Revolutionary grab & go vending technology for Smyrna businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/smyrna-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/smyrna-delaware',
  },
};

export default function SmyrnaDelawareCoolerPageMetadata() {
  return <PageClient />;
}
