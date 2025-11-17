import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tulsa, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tulsa, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tulsa businesses.',
  keywords: 'haha coolers Tulsa, smart vending Tulsa Oklahoma, grab and go cooler Tulsa, cashless vending Tulsa',
  openGraph: {
    title: 'Haha Smart Coolers in Tulsa, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Tulsa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tulsa-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tulsa-oklahoma',
  },
};

export default function TulsaOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
