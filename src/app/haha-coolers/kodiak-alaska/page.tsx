import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kodiak, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kodiak, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kodiak businesses.',
  keywords: 'haha coolers Kodiak, smart vending Kodiak Alaska, grab and go cooler Kodiak, cashless vending Kodiak',
  openGraph: {
    title: 'Haha Smart Coolers in Kodiak, Alaska',
    description: 'Revolutionary grab & go vending technology for Kodiak businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kodiak-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kodiak-alaska',
  },
};

export default function KodiakAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
