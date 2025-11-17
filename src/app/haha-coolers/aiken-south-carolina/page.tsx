import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Aiken, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Aiken, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Aiken businesses.',
  keywords: 'haha coolers Aiken, smart vending Aiken South Carolina, grab and go cooler Aiken, cashless vending Aiken',
  openGraph: {
    title: 'Haha Smart Coolers in Aiken, South Carolina',
    description: 'Revolutionary grab & go vending technology for Aiken businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/aiken-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/aiken-south-carolina',
  },
};

export default function AikenSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
