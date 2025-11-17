import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Worth, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Worth, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Worth businesses.',
  keywords: 'haha coolers Fort Worth, smart vending Fort Worth Texas, grab and go cooler Fort Worth, cashless vending Fort Worth',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Worth, Texas',
    description: 'Revolutionary grab & go vending technology for Fort Worth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-worth-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-worth-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FortWorthTexasCoolerPageMetadata() {
  return <PageClient />;
}
