import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Birmingham, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Birmingham, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Birmingham businesses.',
  keywords: 'haha coolers Birmingham, smart vending Birmingham Alabama, grab and go cooler Birmingham, cashless vending Birmingham',
  openGraph: {
    title: 'Haha Smart Coolers in Birmingham, Alabama',
    description: 'Revolutionary grab & go vending technology for Birmingham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/birmingham-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/birmingham-alabama',
  },
};

export default function BirminghamAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
