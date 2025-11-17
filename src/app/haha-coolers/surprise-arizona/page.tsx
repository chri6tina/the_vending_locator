import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Surprise, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Surprise, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Surprise businesses.',
  keywords: 'haha coolers Surprise, smart vending Surprise Arizona, grab and go cooler Surprise, cashless vending Surprise',
  openGraph: {
    title: 'Haha Smart Coolers in Surprise, Arizona',
    description: 'Revolutionary grab & go vending technology for Surprise businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/surprise-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/surprise-arizona',
  },
};

export default function SurpriseArizonaCoolerPageMetadata() {
  return <PageClient />;
}
