import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Enfield, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Enfield, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Enfield businesses.',
  keywords: 'haha coolers Enfield, smart vending Enfield Connecticut, grab and go cooler Enfield, cashless vending Enfield',
  openGraph: {
    title: 'Haha Smart Coolers in Enfield, Connecticut',
    description: 'Revolutionary grab & go vending technology for Enfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/enfield-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/enfield-connecticut',
  },
};

export default function EnfieldConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
