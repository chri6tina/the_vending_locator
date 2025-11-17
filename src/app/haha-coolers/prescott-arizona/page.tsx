import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Prescott, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Prescott, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Prescott businesses.',
  keywords: 'haha coolers Prescott, smart vending Prescott Arizona, grab and go cooler Prescott, cashless vending Prescott',
  openGraph: {
    title: 'Haha Smart Coolers in Prescott, Arizona',
    description: 'Revolutionary grab & go vending technology for Prescott businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/prescott-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/prescott-arizona',
  },
};

export default function PrescottArizonaCoolerPageMetadata() {
  return <PageClient />;
}
