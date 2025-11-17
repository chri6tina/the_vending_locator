import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Richmond, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Richmond, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Richmond businesses.',
  keywords: 'haha coolers Richmond, smart vending Richmond Kentucky, grab and go cooler Richmond, cashless vending Richmond',
  openGraph: {
    title: 'Haha Smart Coolers in Richmond, Kentucky',
    description: 'Revolutionary grab & go vending technology for Richmond businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/richmond-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/richmond-kentucky',
  },
};

export default function RichmondKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
