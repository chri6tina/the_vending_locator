import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Nashua, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Nashua, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Nashua businesses.',
  keywords: 'haha coolers Nashua, smart vending Nashua New Hampshire, grab and go cooler Nashua, cashless vending Nashua',
  openGraph: {
    title: 'Haha Smart Coolers in Nashua, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Nashua businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/nashua-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/nashua-new-hampshire',
  },
};

export default function NashuaNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
