import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Salem, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Salem, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Salem businesses.',
  keywords: 'haha coolers Salem, smart vending Salem Oregon, grab and go cooler Salem, cashless vending Salem',
  openGraph: {
    title: 'Haha Smart Coolers in Salem, Oregon',
    description: 'Revolutionary grab & go vending technology for Salem businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/salem-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/salem-oregon',
  },
};

export default function SalemOregonCoolerPageMetadata() {
  return <PageClient />;
}
