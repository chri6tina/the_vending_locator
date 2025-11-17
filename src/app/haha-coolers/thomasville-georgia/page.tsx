import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Thomasville, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Thomasville, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Thomasville businesses.',
  keywords: 'haha coolers Thomasville, smart vending Thomasville Georgia, grab and go cooler Thomasville, cashless vending Thomasville',
  openGraph: {
    title: 'Haha Smart Coolers in Thomasville, Georgia',
    description: 'Revolutionary grab & go vending technology for Thomasville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/thomasville-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/thomasville-georgia',
  },
};

export default function ThomasvilleGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
