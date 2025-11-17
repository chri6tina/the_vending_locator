import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Essex Junction, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Essex Junction, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Essex Junction businesses.',
  keywords: 'haha coolers Essex Junction, smart vending Essex Junction Vermont, grab and go cooler Essex Junction, cashless vending Essex Junction',
  openGraph: {
    title: 'Haha Smart Coolers in Essex Junction, Vermont',
    description: 'Revolutionary grab & go vending technology for Essex Junction businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/essex-junction-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/essex-junction-vermont',
  },
};

export default function EssexJunctionVermontCoolerPageMetadata() {
  return <PageClient />;
}
