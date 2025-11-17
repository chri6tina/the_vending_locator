import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hilton Head Island, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hilton Head Island, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hilton Head Island businesses.',
  keywords: 'haha coolers Hilton Head Island, smart vending Hilton Head Island South Carolina, grab and go cooler Hilton Head Island, cashless vending Hilton Head Island',
  openGraph: {
    title: 'Haha Smart Coolers in Hilton Head Island, South Carolina',
    description: 'Revolutionary grab & go vending technology for Hilton Head Island businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hilton-head-island-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hilton-head-island-south-carolina',
  },
};

export default function HiltonHeadIslandSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
