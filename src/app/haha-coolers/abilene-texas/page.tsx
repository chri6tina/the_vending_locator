import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Abilene, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Abilene, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Abilene businesses.',
  keywords: 'haha coolers Abilene, smart vending Abilene Texas, grab and go cooler Abilene, cashless vending Abilene',
  openGraph: {
    title: 'Haha Smart Coolers in Abilene, Texas',
    description: 'Revolutionary grab & go vending technology for Abilene businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/abilene-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/abilene-texas',
  },
};

export default function AbileneTexasCoolerPageMetadata() {
  return <PageClient />;
}
