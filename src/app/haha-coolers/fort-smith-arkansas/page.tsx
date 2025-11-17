import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Smith, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Smith, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Smith businesses.',
  keywords: 'haha coolers Fort Smith, smart vending Fort Smith Arkansas, grab and go cooler Fort Smith, cashless vending Fort Smith',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Smith, Arkansas',
    description: 'Revolutionary grab & go vending technology for Fort Smith businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-smith-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-smith-arkansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FortSmithArkansasCoolerPageMetadata() {
  return <PageClient />;
}
