import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Starkville, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Starkville, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Starkville businesses.',
  keywords: 'haha coolers Starkville, smart vending Starkville Mississippi, grab and go cooler Starkville, cashless vending Starkville',
  openGraph: {
    title: 'Haha Smart Coolers in Starkville, Mississippi',
    description: 'Revolutionary grab & go vending technology for Starkville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/starkville-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/starkville-mississippi',
  },
};

export default function StarkvilleMississippiCoolerPageMetadata() {
  return <PageClient />;
}
