import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Edmond, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Edmond, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Edmond businesses.',
  keywords: 'haha coolers Edmond, smart vending Edmond Oklahoma, grab and go cooler Edmond, cashless vending Edmond',
  openGraph: {
    title: 'Haha Smart Coolers in Edmond, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Edmond businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/edmond-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/edmond-oklahoma',
  },
};

export default function EdmondOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
