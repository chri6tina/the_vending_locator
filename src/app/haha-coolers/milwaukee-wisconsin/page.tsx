import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Milwaukee, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Milwaukee, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Milwaukee businesses.',
  keywords: 'haha coolers Milwaukee, smart vending Milwaukee Wisconsin, grab and go cooler Milwaukee, cashless vending Milwaukee',
  openGraph: {
    title: 'Haha Smart Coolers in Milwaukee, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Milwaukee businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/milwaukee-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/milwaukee-wisconsin',
  },
};

export default function MilwaukeeWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
