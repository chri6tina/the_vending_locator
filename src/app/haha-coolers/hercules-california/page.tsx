import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hercules, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hercules, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hercules businesses.',
  keywords: 'haha coolers Hercules, smart vending Hercules California, grab and go cooler Hercules, cashless vending Hercules',
  openGraph: {
    title: 'Haha Smart Coolers in Hercules, California',
    description: 'Revolutionary grab & go vending technology for Hercules businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hercules-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hercules-california',
  },
};

export default function HerculesCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
