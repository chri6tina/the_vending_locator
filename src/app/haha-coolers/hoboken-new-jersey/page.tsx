import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hoboken, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hoboken, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hoboken businesses.',
  keywords: 'haha coolers Hoboken, smart vending Hoboken New Jersey, grab and go cooler Hoboken, cashless vending Hoboken',
  openGraph: {
    title: 'Haha Smart Coolers in Hoboken, New Jersey',
    description: 'Revolutionary grab & go vending technology for Hoboken businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hoboken-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hoboken-new-jersey',
  },
};

export default function HobokenNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
