import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Opelousas, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Opelousas, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Opelousas businesses.',
  keywords: 'haha coolers Opelousas, smart vending Opelousas Louisiana, grab and go cooler Opelousas, cashless vending Opelousas',
  openGraph: {
    title: 'Haha Smart Coolers in Opelousas, Louisiana',
    description: 'Revolutionary grab & go vending technology for Opelousas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/opelousas-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/opelousas-louisiana',
  },
};

export default function OpelousasLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
