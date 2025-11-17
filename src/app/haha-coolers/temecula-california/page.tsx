import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Temecula, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Temecula, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Temecula businesses.',
  keywords: 'haha coolers Temecula, smart vending Temecula California, grab and go cooler Temecula, cashless vending Temecula',
  openGraph: {
    title: 'Haha Smart Coolers in Temecula, California',
    description: 'Revolutionary grab & go vending technology for Temecula businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/temecula-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/temecula-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TemeculaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
