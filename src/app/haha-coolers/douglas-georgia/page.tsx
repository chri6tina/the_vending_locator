import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Douglas, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Douglas, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Douglas businesses.',
  keywords: 'haha coolers Douglas, smart vending Douglas Georgia, grab and go cooler Douglas, cashless vending Douglas',
  openGraph: {
    title: 'Haha Smart Coolers in Douglas, Georgia',
    description: 'Revolutionary grab & go vending technology for Douglas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/douglas-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/douglas-georgia',
  },
};

export default function DouglasGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
