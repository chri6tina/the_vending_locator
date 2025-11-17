import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dalton, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dalton, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dalton businesses.',
  keywords: 'haha coolers Dalton, smart vending Dalton Georgia, grab and go cooler Dalton, cashless vending Dalton',
  openGraph: {
    title: 'Haha Smart Coolers in Dalton, Georgia',
    description: 'Revolutionary grab & go vending technology for Dalton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dalton-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dalton-georgia',
  },
};

export default function DaltonGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
