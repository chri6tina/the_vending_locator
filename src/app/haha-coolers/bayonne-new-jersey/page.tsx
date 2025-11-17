import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bayonne, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bayonne, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bayonne businesses.',
  keywords: 'haha coolers Bayonne, smart vending Bayonne New Jersey, grab and go cooler Bayonne, cashless vending Bayonne',
  openGraph: {
    title: 'Haha Smart Coolers in Bayonne, New Jersey',
    description: 'Revolutionary grab & go vending technology for Bayonne businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bayonne-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bayonne-new-jersey',
  },
};

export default function BayonneNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
