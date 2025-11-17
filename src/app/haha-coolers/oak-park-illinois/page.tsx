import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oak Park, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oak Park, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oak Park businesses.',
  keywords: 'haha coolers Oak Park, smart vending Oak Park Illinois, grab and go cooler Oak Park, cashless vending Oak Park',
  openGraph: {
    title: 'Haha Smart Coolers in Oak Park, Illinois',
    description: 'Revolutionary grab & go vending technology for Oak Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oak-park-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oak-park-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OakParkIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
