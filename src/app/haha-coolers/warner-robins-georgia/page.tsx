import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Warner Robins, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Warner Robins, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Warner Robins businesses.',
  keywords: 'haha coolers Warner Robins, smart vending Warner Robins Georgia, grab and go cooler Warner Robins, cashless vending Warner Robins',
  openGraph: {
    title: 'Haha Smart Coolers in Warner Robins, Georgia',
    description: 'Revolutionary grab & go vending technology for Warner Robins businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/warner-robins-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/warner-robins-georgia',
  },
};

export default function WarnerRobinsGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
