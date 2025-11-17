import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in La Canada Flintridge, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in La Canada Flintridge, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for La Canada Flintridge businesses.',
  keywords: 'haha coolers La Canada Flintridge, smart vending La Canada Flintridge California, grab and go cooler La Canada Flintridge, cashless vending La Canada Flintridge',
  openGraph: {
    title: 'Haha Smart Coolers in La Canada Flintridge, California',
    description: 'Revolutionary grab & go vending technology for La Canada Flintridge businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/la-canada-flintridge-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/la-canada-flintridge-california',
  },
};

export default function LaCanadaFlintridgeCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
