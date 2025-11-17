import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pensacola, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pensacola, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pensacola businesses.',
  keywords: 'haha coolers Pensacola, smart vending Pensacola Florida, grab and go cooler Pensacola, cashless vending Pensacola',
  openGraph: {
    title: 'Haha Smart Coolers in Pensacola, Florida',
    description: 'Revolutionary grab & go vending technology for Pensacola businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pensacola-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pensacola-florida',
  },
};

export default function PensacolaFloridaCoolerPageMetadata() {
  return <PageClient />;
}
