import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hackensack, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hackensack, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hackensack businesses.',
  keywords: 'haha coolers Hackensack, smart vending Hackensack New Jersey, grab and go cooler Hackensack, cashless vending Hackensack',
  openGraph: {
    title: 'Haha Smart Coolers in Hackensack, New Jersey',
    description: 'Revolutionary grab & go vending technology for Hackensack businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hackensack-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hackensack-new-jersey',
  },
};

export default function HackensackNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
