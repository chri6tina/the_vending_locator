import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cedar Rapids, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cedar Rapids, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cedar Rapids businesses.',
  keywords: 'haha coolers Cedar Rapids, smart vending Cedar Rapids Iowa, grab and go cooler Cedar Rapids, cashless vending Cedar Rapids',
  openGraph: {
    title: 'Haha Smart Coolers in Cedar Rapids, Iowa',
    description: 'Revolutionary grab & go vending technology for Cedar Rapids businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cedar-rapids-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cedar-rapids-iowa',
  },
};

export default function CedarRapidsIowaCoolerPageMetadata() {
  return <PageClient />;
}
