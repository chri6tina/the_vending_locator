import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Juneau, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Juneau, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Juneau businesses.',
  keywords: 'haha coolers Juneau, smart vending Juneau Alaska, grab and go cooler Juneau, cashless vending Juneau',
  openGraph: {
    title: 'Haha Smart Coolers in Juneau, Alaska',
    description: 'Revolutionary grab & go vending technology for Juneau businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/juneau-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/juneau-alaska',
  },
};

export default function JuneauAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
