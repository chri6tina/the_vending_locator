import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waltham, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waltham, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waltham businesses.',
  keywords: 'haha coolers Waltham, smart vending Waltham Massachusetts, grab and go cooler Waltham, cashless vending Waltham',
  openGraph: {
    title: 'Haha Smart Coolers in Waltham, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Waltham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waltham-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waltham-massachusetts',
  },
};

export default function WalthamMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
