import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Anderson, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Anderson, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Anderson businesses.',
  keywords: 'haha coolers Anderson, smart vending Anderson Indiana, grab and go cooler Anderson, cashless vending Anderson',
  openGraph: {
    title: 'Haha Smart Coolers in Anderson, Indiana',
    description: 'Revolutionary grab & go vending technology for Anderson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/anderson-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/anderson-indiana',
  },
};

export default function AndersonIndianaCoolerPageMetadata() {
  return <PageClient />;
}
