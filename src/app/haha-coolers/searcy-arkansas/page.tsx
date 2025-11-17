import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Searcy, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Searcy, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Searcy businesses.',
  keywords: 'haha coolers Searcy, smart vending Searcy Arkansas, grab and go cooler Searcy, cashless vending Searcy',
  openGraph: {
    title: 'Haha Smart Coolers in Searcy, Arkansas',
    description: 'Revolutionary grab & go vending technology for Searcy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/searcy-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/searcy-arkansas',
  },
};

export default function SearcyArkansasCoolerPageMetadata() {
  return <PageClient />;
}
