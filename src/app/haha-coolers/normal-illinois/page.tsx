import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Normal, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Normal, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Normal businesses.',
  keywords: 'haha coolers Normal, smart vending Normal Illinois, grab and go cooler Normal, cashless vending Normal',
  openGraph: {
    title: 'Haha Smart Coolers in Normal, Illinois',
    description: 'Revolutionary grab & go vending technology for Normal businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/normal-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/normal-illinois',
  },
};

export default function NormalIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
