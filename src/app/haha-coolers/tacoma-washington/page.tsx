import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tacoma, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tacoma, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tacoma businesses.',
  keywords: 'haha coolers Tacoma, smart vending Tacoma Washington, grab and go cooler Tacoma, cashless vending Tacoma',
  openGraph: {
    title: 'Haha Smart Coolers in Tacoma, Washington',
    description: 'Revolutionary grab & go vending technology for Tacoma businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tacoma-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tacoma-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TacomaWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
