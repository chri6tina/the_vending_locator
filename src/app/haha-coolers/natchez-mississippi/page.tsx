import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Natchez, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Natchez, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Natchez businesses.',
  keywords: 'haha coolers Natchez, smart vending Natchez Mississippi, grab and go cooler Natchez, cashless vending Natchez',
  openGraph: {
    title: 'Haha Smart Coolers in Natchez, Mississippi',
    description: 'Revolutionary grab & go vending technology for Natchez businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/natchez-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/natchez-mississippi',
  },
};

export default function NatchezMississippiCoolerPageMetadata() {
  return <PageClient />;
}
