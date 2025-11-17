import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Toledo, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Toledo, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Toledo businesses.',
  keywords: 'haha coolers Toledo, smart vending Toledo Ohio, grab and go cooler Toledo, cashless vending Toledo',
  openGraph: {
    title: 'Haha Smart Coolers in Toledo, Ohio',
    description: 'Revolutionary grab & go vending technology for Toledo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/toledo-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/toledo-ohio',
  },
};

export default function ToledoOhioCoolerPageMetadata() {
  return <PageClient />;
}
