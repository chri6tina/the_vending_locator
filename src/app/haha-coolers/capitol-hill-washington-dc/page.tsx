import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Capitol Hill, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Capitol Hill, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Capitol Hill businesses.',
  keywords: 'haha coolers Capitol Hill, smart vending Capitol Hill Washington DC, grab and go cooler Capitol Hill, cashless vending Capitol Hill',
  openGraph: {
    title: 'Haha Smart Coolers in Capitol Hill, Washington DC',
    description: 'Revolutionary grab & go vending technology for Capitol Hill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/capitol-hill-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/capitol-hill-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CapitolHillWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
