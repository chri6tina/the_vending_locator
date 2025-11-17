import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Salina, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Salina, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Salina businesses.',
  keywords: 'haha coolers Salina, smart vending Salina Kansas, grab and go cooler Salina, cashless vending Salina',
  openGraph: {
    title: 'Haha Smart Coolers in Salina, Kansas',
    description: 'Revolutionary grab & go vending technology for Salina businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/salina-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/salina-kansas',
  },
};

export default function SalinaKansasCoolerPageMetadata() {
  return <PageClient />;
}
