import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Silver Spring, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Silver Spring, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Silver Spring businesses.',
  keywords: 'haha coolers Silver Spring, smart vending Silver Spring Maryland, grab and go cooler Silver Spring, cashless vending Silver Spring',
  openGraph: {
    title: 'Haha Smart Coolers in Silver Spring, Maryland',
    description: 'Revolutionary grab & go vending technology for Silver Spring businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/silver-spring-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/silver-spring-maryland',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SilverSpringMarylandCoolerPageMetadata() {
  return <PageClient />;
}
