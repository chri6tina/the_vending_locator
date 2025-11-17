import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Provo, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Provo, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Provo businesses.',
  keywords: 'haha coolers Provo, smart vending Provo Utah, grab and go cooler Provo, cashless vending Provo',
  openGraph: {
    title: 'Haha Smart Coolers in Provo, Utah',
    description: 'Revolutionary grab & go vending technology for Provo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/provo-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/provo-utah',
  },
};

export default function ProvoUtahCoolerPageMetadata() {
  return <PageClient />;
}
