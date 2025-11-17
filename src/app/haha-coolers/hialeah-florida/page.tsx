import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hialeah, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hialeah, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hialeah businesses.',
  keywords: 'haha coolers Hialeah, smart vending Hialeah Florida, grab and go cooler Hialeah, cashless vending Hialeah',
  openGraph: {
    title: 'Haha Smart Coolers in Hialeah, Florida',
    description: 'Revolutionary grab & go vending technology for Hialeah businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hialeah-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hialeah-florida',
  },
};

export default function HialeahFloridaCoolerPageMetadata() {
  return <PageClient />;
}
