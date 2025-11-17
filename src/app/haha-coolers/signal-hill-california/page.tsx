import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Signal Hill, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Signal Hill, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Signal Hill businesses.',
  keywords: 'haha coolers Signal Hill, smart vending Signal Hill California, grab and go cooler Signal Hill, cashless vending Signal Hill',
  openGraph: {
    title: 'Haha Smart Coolers in Signal Hill, California',
    description: 'Revolutionary grab & go vending technology for Signal Hill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/signal-hill-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/signal-hill-california',
  },
};

export default function SignalHillCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
