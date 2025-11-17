import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Anderson, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Anderson, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Anderson businesses.',
  keywords: 'haha coolers Anderson, smart vending Anderson South Carolina, grab and go cooler Anderson, cashless vending Anderson',
  openGraph: {
    title: 'Haha Smart Coolers in Anderson, South Carolina',
    description: 'Revolutionary grab & go vending technology for Anderson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/anderson-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/anderson-south-carolina',
  },
};

export default function AndersonSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
