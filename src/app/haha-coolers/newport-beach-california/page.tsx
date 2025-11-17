import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newport Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newport Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newport Beach businesses.',
  keywords: 'haha coolers Newport Beach, smart vending Newport Beach California, grab and go cooler Newport Beach, cashless vending Newport Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Newport Beach, California',
    description: 'Revolutionary grab & go vending technology for Newport Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newport-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newport-beach-california',
  },
};

export default function NewportBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
