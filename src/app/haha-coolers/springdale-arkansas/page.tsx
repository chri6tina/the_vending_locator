import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Springdale, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Springdale, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Springdale businesses.',
  keywords: 'haha coolers Springdale, smart vending Springdale Arkansas, grab and go cooler Springdale, cashless vending Springdale',
  openGraph: {
    title: 'Haha Smart Coolers in Springdale, Arkansas',
    description: 'Revolutionary grab & go vending technology for Springdale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/springdale-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/springdale-arkansas',
  },
};

export default function SpringdaleArkansasCoolerPageMetadata() {
  return <PageClient />;
}
