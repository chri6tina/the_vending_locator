import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Quincy, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Quincy, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Quincy businesses.',
  keywords: 'haha coolers Quincy, smart vending Quincy Massachusetts, grab and go cooler Quincy, cashless vending Quincy',
  openGraph: {
    title: 'Haha Smart Coolers in Quincy, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Quincy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/quincy-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/quincy-massachusetts',
  },
};

export default function QuincyMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
