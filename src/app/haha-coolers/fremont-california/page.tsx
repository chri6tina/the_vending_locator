import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fremont, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fremont, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fremont businesses.',
  keywords: 'haha coolers Fremont, smart vending Fremont California, grab and go cooler Fremont, cashless vending Fremont',
  openGraph: {
    title: 'Haha Smart Coolers in Fremont, California',
    description: 'Revolutionary grab & go vending technology for Fremont businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fremont-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fremont-california',
  },
};

export default function FremontCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
