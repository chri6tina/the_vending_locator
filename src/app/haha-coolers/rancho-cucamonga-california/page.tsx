import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rancho Cucamonga, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rancho Cucamonga, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rancho Cucamonga businesses.',
  keywords: 'haha coolers Rancho Cucamonga, smart vending Rancho Cucamonga California, grab and go cooler Rancho Cucamonga, cashless vending Rancho Cucamonga',
  openGraph: {
    title: 'Haha Smart Coolers in Rancho Cucamonga, California',
    description: 'Revolutionary grab & go vending technology for Rancho Cucamonga businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rancho-cucamonga-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rancho-cucamonga-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RanchoCucamongaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
