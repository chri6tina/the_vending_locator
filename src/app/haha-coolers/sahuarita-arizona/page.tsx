import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sahuarita, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sahuarita, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sahuarita businesses.',
  keywords: 'haha coolers Sahuarita, smart vending Sahuarita Arizona, grab and go cooler Sahuarita, cashless vending Sahuarita',
  openGraph: {
    title: 'Haha Smart Coolers in Sahuarita, Arizona',
    description: 'Revolutionary grab & go vending technology for Sahuarita businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sahuarita-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sahuarita-arizona',
  },
};

export default function SahuaritaArizonaCoolerPageMetadata() {
  return <PageClient />;
}
