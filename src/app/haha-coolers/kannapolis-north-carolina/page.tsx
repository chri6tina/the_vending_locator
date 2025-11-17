import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kannapolis, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kannapolis, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kannapolis businesses.',
  keywords: 'haha coolers Kannapolis, smart vending Kannapolis North Carolina, grab and go cooler Kannapolis, cashless vending Kannapolis',
  openGraph: {
    title: 'Haha Smart Coolers in Kannapolis, North Carolina',
    description: 'Revolutionary grab & go vending technology for Kannapolis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kannapolis-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kannapolis-north-carolina',
  },
};

export default function KannapolisNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
