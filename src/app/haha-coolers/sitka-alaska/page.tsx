import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sitka, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sitka, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sitka businesses.',
  keywords: 'haha coolers Sitka, smart vending Sitka Alaska, grab and go cooler Sitka, cashless vending Sitka',
  openGraph: {
    title: 'Haha Smart Coolers in Sitka, Alaska',
    description: 'Revolutionary grab & go vending technology for Sitka businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sitka-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sitka-alaska',
  },
};

export default function SitkaAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
