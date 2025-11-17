import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Eau Claire, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Eau Claire, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Eau Claire businesses.',
  keywords: 'haha coolers Eau Claire, smart vending Eau Claire Wisconsin, grab and go cooler Eau Claire, cashless vending Eau Claire',
  openGraph: {
    title: 'Haha Smart Coolers in Eau Claire, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Eau Claire businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/eau-claire-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/eau-claire-wisconsin',
  },
};

export default function EauClaireWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
