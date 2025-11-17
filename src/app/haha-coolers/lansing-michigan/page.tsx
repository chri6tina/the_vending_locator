import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lansing, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lansing, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lansing businesses.',
  keywords: 'haha coolers Lansing, smart vending Lansing Michigan, grab and go cooler Lansing, cashless vending Lansing',
  openGraph: {
    title: 'Haha Smart Coolers in Lansing, Michigan',
    description: 'Revolutionary grab & go vending technology for Lansing businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lansing-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lansing-michigan',
  },
};

export default function LansingMichiganCoolerPageMetadata() {
  return <PageClient />;
}
