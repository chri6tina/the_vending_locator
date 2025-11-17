import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hillsboro, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hillsboro, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hillsboro businesses.',
  keywords: 'haha coolers Hillsboro, smart vending Hillsboro Oregon, grab and go cooler Hillsboro, cashless vending Hillsboro',
  openGraph: {
    title: 'Haha Smart Coolers in Hillsboro, Oregon',
    description: 'Revolutionary grab & go vending technology for Hillsboro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hillsboro-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hillsboro-oregon',
  },
};

export default function HillsboroOregonCoolerPageMetadata() {
  return <PageClient />;
}
