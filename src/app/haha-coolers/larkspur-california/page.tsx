import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Larkspur, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Larkspur, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Larkspur businesses.',
  keywords: 'haha coolers Larkspur, smart vending Larkspur California, grab and go cooler Larkspur, cashless vending Larkspur',
  openGraph: {
    title: 'Haha Smart Coolers in Larkspur, California',
    description: 'Revolutionary grab & go vending technology for Larkspur businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/larkspur-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/larkspur-california',
  },
};

export default function LarkspurCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
