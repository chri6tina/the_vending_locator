import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Taylorsville, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Taylorsville, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Taylorsville businesses.',
  keywords: 'haha coolers Taylorsville, smart vending Taylorsville Utah, grab and go cooler Taylorsville, cashless vending Taylorsville',
  openGraph: {
    title: 'Haha Smart Coolers in Taylorsville, Utah',
    description: 'Revolutionary grab & go vending technology for Taylorsville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/taylorsville-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/taylorsville-utah',
  },
};

export default function TaylorsvilleUtahCoolerPageMetadata() {
  return <PageClient />;
}
