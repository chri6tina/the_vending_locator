import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in La Quinta, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in La Quinta, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for La Quinta businesses.',
  keywords: 'haha coolers La Quinta, smart vending La Quinta California, grab and go cooler La Quinta, cashless vending La Quinta',
  openGraph: {
    title: 'Haha Smart Coolers in La Quinta, California',
    description: 'Revolutionary grab & go vending technology for La Quinta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/la-quinta-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/la-quinta-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LaQuintaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
