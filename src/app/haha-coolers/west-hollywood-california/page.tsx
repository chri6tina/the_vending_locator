import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Hollywood, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Hollywood, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Hollywood businesses.',
  keywords: 'haha coolers West Hollywood, smart vending West Hollywood California, grab and go cooler West Hollywood, cashless vending West Hollywood',
  openGraph: {
    title: 'Haha Smart Coolers in West Hollywood, California',
    description: 'Revolutionary grab & go vending technology for West Hollywood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-hollywood-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-hollywood-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WestHollywoodCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
