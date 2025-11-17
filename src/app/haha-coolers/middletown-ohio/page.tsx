import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Middletown, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Middletown, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Middletown businesses.',
  keywords: 'haha coolers Middletown, smart vending Middletown Ohio, grab and go cooler Middletown, cashless vending Middletown',
  openGraph: {
    title: 'Haha Smart Coolers in Middletown, Ohio',
    description: 'Revolutionary grab & go vending technology for Middletown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/middletown-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/middletown-ohio',
  },
};

export default function MiddletownOhioCoolerPageMetadata() {
  return <PageClient />;
}
