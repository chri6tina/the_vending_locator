import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Derry, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Derry, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Derry businesses.',
  keywords: 'haha coolers Derry, smart vending Derry New Hampshire, grab and go cooler Derry, cashless vending Derry',
  openGraph: {
    title: 'Haha Smart Coolers in Derry, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Derry businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/derry-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/derry-new-hampshire',
  },
};

export default function DerryNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
