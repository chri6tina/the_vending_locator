import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laredo, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laredo, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laredo businesses.',
  keywords: 'haha coolers Laredo, smart vending Laredo Texas, grab and go cooler Laredo, cashless vending Laredo',
  openGraph: {
    title: 'Haha Smart Coolers in Laredo, Texas',
    description: 'Revolutionary grab & go vending technology for Laredo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laredo-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laredo-texas',
  },
};

export default function LaredoTexasCoolerPageMetadata() {
  return <PageClient />;
}
