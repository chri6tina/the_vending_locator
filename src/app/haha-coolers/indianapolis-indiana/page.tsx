import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Indianapolis, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Indianapolis, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Indianapolis businesses.',
  keywords: 'haha coolers Indianapolis, smart vending Indianapolis Indiana, grab and go cooler Indianapolis, cashless vending Indianapolis',
  openGraph: {
    title: 'Haha Smart Coolers in Indianapolis, Indiana',
    description: 'Revolutionary grab & go vending technology for Indianapolis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/indianapolis-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/indianapolis-indiana',
  },
};

export default function IndianapolisIndianaCoolerPageMetadata() {
  return <PageClient />;
}
