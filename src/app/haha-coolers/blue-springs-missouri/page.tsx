import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Blue Springs, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Blue Springs, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Blue Springs businesses.',
  keywords: 'haha coolers Blue Springs, smart vending Blue Springs Missouri, grab and go cooler Blue Springs, cashless vending Blue Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Blue Springs, Missouri',
    description: 'Revolutionary grab & go vending technology for Blue Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/blue-springs-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/blue-springs-missouri',
  },
};

export default function BlueSpringsMissouriCoolerPageMetadata() {
  return <PageClient />;
}
