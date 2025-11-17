import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Texarkana, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Texarkana, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Texarkana businesses.',
  keywords: 'haha coolers Texarkana, smart vending Texarkana Arkansas, grab and go cooler Texarkana, cashless vending Texarkana',
  openGraph: {
    title: 'Haha Smart Coolers in Texarkana, Arkansas',
    description: 'Revolutionary grab & go vending technology for Texarkana businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/texarkana-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/texarkana-arkansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TexarkanaArkansasCoolerPageMetadata() {
  return <PageClient />;
}
