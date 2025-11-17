import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Myrtle Beach, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Myrtle Beach, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Myrtle Beach businesses.',
  keywords: 'haha coolers Myrtle Beach, smart vending Myrtle Beach South Carolina, grab and go cooler Myrtle Beach, cashless vending Myrtle Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Myrtle Beach, South Carolina',
    description: 'Revolutionary grab & go vending technology for Myrtle Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/myrtle-beach-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/myrtle-beach-south-carolina',
  },
};

export default function MyrtleBeachSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
