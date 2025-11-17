import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Seattle, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Seattle, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Seattle businesses.',
  keywords: 'haha coolers Seattle, smart vending Seattle Washington, grab and go cooler Seattle, cashless vending Seattle',
  openGraph: {
    title: 'Haha Smart Coolers in Seattle, Washington',
    description: 'Revolutionary grab & go vending technology for Seattle businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/seattle-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/seattle-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SeattleWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
