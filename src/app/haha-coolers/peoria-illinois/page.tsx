import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Peoria, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Peoria, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Peoria businesses.',
  keywords: 'haha coolers Peoria, smart vending Peoria Illinois, grab and go cooler Peoria, cashless vending Peoria',
  openGraph: {
    title: 'Haha Smart Coolers in Peoria, Illinois',
    description: 'Revolutionary grab & go vending technology for Peoria businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/peoria-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/peoria-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PeoriaIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
