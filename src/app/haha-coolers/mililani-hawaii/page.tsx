import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mililani, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mililani, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mililani businesses.',
  keywords: 'haha coolers Mililani, smart vending Mililani Hawaii, grab and go cooler Mililani, cashless vending Mililani',
  openGraph: {
    title: 'Haha Smart Coolers in Mililani, Hawaii',
    description: 'Revolutionary grab & go vending technology for Mililani businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mililani-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mililani-hawaii',
  },
};

export default function MililaniHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
