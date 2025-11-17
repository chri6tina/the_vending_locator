import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Clovis, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Clovis, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Clovis businesses.',
  keywords: 'haha coolers Clovis, smart vending Clovis California, grab and go cooler Clovis, cashless vending Clovis',
  openGraph: {
    title: 'Haha Smart Coolers in Clovis, California',
    description: 'Revolutionary grab & go vending technology for Clovis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/clovis-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/clovis-california',
  },
};

export default function ClovisCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
