import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cabot, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cabot, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cabot businesses.',
  keywords: 'haha coolers Cabot, smart vending Cabot Arkansas, grab and go cooler Cabot, cashless vending Cabot',
  openGraph: {
    title: 'Haha Smart Coolers in Cabot, Arkansas',
    description: 'Revolutionary grab & go vending technology for Cabot businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cabot-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cabot-arkansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CabotArkansasCoolerPageMetadata() {
  return <PageClient />;
}
