import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Scranton, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Scranton, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Scranton businesses.',
  keywords: 'haha coolers Scranton, smart vending Scranton Pennsylvania, grab and go cooler Scranton, cashless vending Scranton',
  openGraph: {
    title: 'Haha Smart Coolers in Scranton, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Scranton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/scranton-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/scranton-pennsylvania',
  },
};

export default function ScrantonPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
