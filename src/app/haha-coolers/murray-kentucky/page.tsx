import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Murray, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Murray, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Murray businesses.',
  keywords: 'haha coolers Murray, smart vending Murray Kentucky, grab and go cooler Murray, cashless vending Murray',
  openGraph: {
    title: 'Haha Smart Coolers in Murray, Kentucky',
    description: 'Revolutionary grab & go vending technology for Murray businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/murray-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/murray-kentucky',
  },
};

export default function MurrayKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
