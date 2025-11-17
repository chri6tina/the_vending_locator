import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Adams Morgan, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Adams Morgan, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Adams Morgan businesses.',
  keywords: 'haha coolers Adams Morgan, smart vending Adams Morgan Washington DC, grab and go cooler Adams Morgan, cashless vending Adams Morgan',
  openGraph: {
    title: 'Haha Smart Coolers in Adams Morgan, Washington DC',
    description: 'Revolutionary grab & go vending technology for Adams Morgan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/adams-morgan-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/adams-morgan-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AdamsMorganWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
