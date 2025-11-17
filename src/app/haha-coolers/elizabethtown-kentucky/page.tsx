import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elizabethtown, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elizabethtown, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elizabethtown businesses.',
  keywords: 'haha coolers Elizabethtown, smart vending Elizabethtown Kentucky, grab and go cooler Elizabethtown, cashless vending Elizabethtown',
  openGraph: {
    title: 'Haha Smart Coolers in Elizabethtown, Kentucky',
    description: 'Revolutionary grab & go vending technology for Elizabethtown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elizabethtown-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elizabethtown-kentucky',
  },
};

export default function ElizabethtownKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
