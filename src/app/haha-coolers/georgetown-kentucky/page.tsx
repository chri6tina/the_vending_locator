import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Georgetown, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Georgetown, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Georgetown businesses.',
  keywords: 'haha coolers Georgetown, smart vending Georgetown Kentucky, grab and go cooler Georgetown, cashless vending Georgetown',
  openGraph: {
    title: 'Haha Smart Coolers in Georgetown, Kentucky',
    description: 'Revolutionary grab & go vending technology for Georgetown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/georgetown-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/georgetown-kentucky',
  },
};

export default function GeorgetownKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
