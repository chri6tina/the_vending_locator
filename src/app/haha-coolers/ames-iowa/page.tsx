import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ames, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ames, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ames businesses.',
  keywords: 'haha coolers Ames, smart vending Ames Iowa, grab and go cooler Ames, cashless vending Ames',
  openGraph: {
    title: 'Haha Smart Coolers in Ames, Iowa',
    description: 'Revolutionary grab & go vending technology for Ames businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ames-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ames-iowa',
  },
};

export default function AmesIowaCoolerPageMetadata() {
  return <PageClient />;
}
