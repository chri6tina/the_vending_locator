import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Goose Creek, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Goose Creek, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Goose Creek businesses.',
  keywords: 'haha coolers Goose Creek, smart vending Goose Creek South Carolina, grab and go cooler Goose Creek, cashless vending Goose Creek',
  openGraph: {
    title: 'Haha Smart Coolers in Goose Creek, South Carolina',
    description: 'Revolutionary grab & go vending technology for Goose Creek businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/goose-creek-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/goose-creek-south-carolina',
  },
};

export default function GooseCreekSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
