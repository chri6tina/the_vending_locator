import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lubbock, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lubbock, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lubbock businesses.',
  keywords: 'haha coolers Lubbock, smart vending Lubbock Texas, grab and go cooler Lubbock, cashless vending Lubbock',
  openGraph: {
    title: 'Haha Smart Coolers in Lubbock, Texas',
    description: 'Revolutionary grab & go vending technology for Lubbock businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lubbock-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lubbock-texas',
  },
};

export default function LubbockTexasCoolerPageMetadata() {
  return <PageClient />;
}
