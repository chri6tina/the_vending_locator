import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Odessa, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Odessa, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Odessa businesses.',
  keywords: 'haha coolers Odessa, smart vending Odessa Texas, grab and go cooler Odessa, cashless vending Odessa',
  openGraph: {
    title: 'Haha Smart Coolers in Odessa, Texas',
    description: 'Revolutionary grab & go vending technology for Odessa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/odessa-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/odessa-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OdessaTexasCoolerPageMetadata() {
  return <PageClient />;
}
