import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Frankfort, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Frankfort, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Frankfort businesses.',
  keywords: 'haha coolers Frankfort, smart vending Frankfort Kentucky, grab and go cooler Frankfort, cashless vending Frankfort',
  openGraph: {
    title: 'Haha Smart Coolers in Frankfort, Kentucky',
    description: 'Revolutionary grab & go vending technology for Frankfort businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/frankfort-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/frankfort-kentucky',
  },
};

export default function FrankfortKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
