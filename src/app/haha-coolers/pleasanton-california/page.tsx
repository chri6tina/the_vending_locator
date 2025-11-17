import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pleasanton, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pleasanton, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pleasanton businesses.',
  keywords: 'haha coolers Pleasanton, smart vending Pleasanton California, grab and go cooler Pleasanton, cashless vending Pleasanton',
  openGraph: {
    title: 'Haha Smart Coolers in Pleasanton, California',
    description: 'Revolutionary grab & go vending technology for Pleasanton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pleasanton-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pleasanton-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PleasantonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
