import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gainesville, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gainesville, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gainesville businesses.',
  keywords: 'haha coolers Gainesville, smart vending Gainesville Georgia, grab and go cooler Gainesville, cashless vending Gainesville',
  openGraph: {
    title: 'Haha Smart Coolers in Gainesville, Georgia',
    description: 'Revolutionary grab & go vending technology for Gainesville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gainesville-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gainesville-georgia',
  },
};

export default function GainesvilleGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
