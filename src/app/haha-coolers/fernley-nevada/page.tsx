import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fernley, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fernley, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fernley businesses.',
  keywords: 'haha coolers Fernley, smart vending Fernley Nevada, grab and go cooler Fernley, cashless vending Fernley',
  openGraph: {
    title: 'Haha Smart Coolers in Fernley, Nevada',
    description: 'Revolutionary grab & go vending technology for Fernley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fernley-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fernley-nevada',
  },
};

export default function FernleyNevadaCoolerPageMetadata() {
  return <PageClient />;
}
