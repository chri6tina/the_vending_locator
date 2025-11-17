import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Navy Yard, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Navy Yard, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Navy Yard businesses.',
  keywords: 'haha coolers Navy Yard, smart vending Navy Yard Washington DC, grab and go cooler Navy Yard, cashless vending Navy Yard',
  openGraph: {
    title: 'Haha Smart Coolers in Navy Yard, Washington DC',
    description: 'Revolutionary grab & go vending technology for Navy Yard businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/navy-yard-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/navy-yard-washington-dc',
  },
};

export default function NavyYardWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
