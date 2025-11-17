import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Washington, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Washington, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Washington businesses.',
  keywords: 'haha coolers Washington, smart vending Washington Washington DC, grab and go cooler Washington, cashless vending Washington',
  openGraph: {
    title: 'Haha Smart Coolers in Washington, Washington DC',
    description: 'Revolutionary grab & go vending technology for Washington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/washington-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/washington-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WashingtonWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
