import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Council Bluffs, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Council Bluffs, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Council Bluffs businesses.',
  keywords: 'haha coolers Council Bluffs, smart vending Council Bluffs Iowa, grab and go cooler Council Bluffs, cashless vending Council Bluffs',
  openGraph: {
    title: 'Haha Smart Coolers in Council Bluffs, Iowa',
    description: 'Revolutionary grab & go vending technology for Council Bluffs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/council-bluffs-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/council-bluffs-iowa',
  },
};

export default function CouncilBluffsIowaCoolerPageMetadata() {
  return <PageClient />;
}
