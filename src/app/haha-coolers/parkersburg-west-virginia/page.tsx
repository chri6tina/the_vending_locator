import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Parkersburg, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Parkersburg, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Parkersburg businesses.',
  keywords: 'haha coolers Parkersburg, smart vending Parkersburg West Virginia, grab and go cooler Parkersburg, cashless vending Parkersburg',
  openGraph: {
    title: 'Haha Smart Coolers in Parkersburg, West Virginia',
    description: 'Revolutionary grab & go vending technology for Parkersburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/parkersburg-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/parkersburg-west-virginia',
  },
};

export default function ParkersburgWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
