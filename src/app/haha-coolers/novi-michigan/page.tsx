import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Novi, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Novi, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Novi businesses.',
  keywords: 'haha coolers Novi, smart vending Novi Michigan, grab and go cooler Novi, cashless vending Novi',
  openGraph: {
    title: 'Haha Smart Coolers in Novi, Michigan',
    description: 'Revolutionary grab & go vending technology for Novi businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/novi-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/novi-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NoviMichiganCoolerPageMetadata() {
  return <PageClient />;
}
