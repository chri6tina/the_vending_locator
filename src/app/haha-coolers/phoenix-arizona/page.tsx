import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Phoenix, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Phoenix, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Phoenix businesses.',
  keywords: 'haha coolers Phoenix, smart vending Phoenix Arizona, grab and go cooler Phoenix, cashless vending Phoenix',
  openGraph: {
    title: 'Haha Smart Coolers in Phoenix, Arizona',
    description: 'Revolutionary grab & go vending technology for Phoenix businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/phoenix-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/phoenix-arizona',
  },
};

export default function PhoenixArizonaCoolerPageMetadata() {
  return <PageClient />;
}
