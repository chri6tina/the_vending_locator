import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Peoria, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Peoria, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Peoria businesses.',
  keywords: 'haha coolers Peoria, smart vending Peoria Arizona, grab and go cooler Peoria, cashless vending Peoria',
  openGraph: {
    title: 'Haha Smart Coolers in Peoria, Arizona',
    description: 'Revolutionary grab & go vending technology for Peoria businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/peoria-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/peoria-arizona',
  },
};

export default function PeoriaArizonaCoolerPageMetadata() {
  return <PageClient />;
}
