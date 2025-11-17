import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oshkosh, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oshkosh, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oshkosh businesses.',
  keywords: 'haha coolers Oshkosh, smart vending Oshkosh Wisconsin, grab and go cooler Oshkosh, cashless vending Oshkosh',
  openGraph: {
    title: 'Haha Smart Coolers in Oshkosh, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Oshkosh businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oshkosh-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oshkosh-wisconsin',
  },
};

export default function OshkoshWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
