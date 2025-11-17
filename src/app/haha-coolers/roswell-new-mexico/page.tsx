import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Roswell, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Roswell, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Roswell businesses.',
  keywords: 'haha coolers Roswell, smart vending Roswell New Mexico, grab and go cooler Roswell, cashless vending Roswell',
  openGraph: {
    title: 'Haha Smart Coolers in Roswell, New Mexico',
    description: 'Revolutionary grab & go vending technology for Roswell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/roswell-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/roswell-new-mexico',
  },
};

export default function RoswellNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
