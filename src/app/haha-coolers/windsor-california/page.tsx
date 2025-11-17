import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Windsor, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Windsor, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Windsor businesses.',
  keywords: 'haha coolers Windsor, smart vending Windsor California, grab and go cooler Windsor, cashless vending Windsor',
  openGraph: {
    title: 'Haha Smart Coolers in Windsor, California',
    description: 'Revolutionary grab & go vending technology for Windsor businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/windsor-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/windsor-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WindsorCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
