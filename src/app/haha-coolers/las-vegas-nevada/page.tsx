import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Las Vegas, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Las Vegas, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Las Vegas businesses.',
  keywords: 'haha coolers Las Vegas, smart vending Las Vegas Nevada, grab and go cooler Las Vegas, cashless vending Las Vegas',
  openGraph: {
    title: 'Haha Smart Coolers in Las Vegas, Nevada',
    description: 'Revolutionary grab & go vending technology for Las Vegas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/las-vegas-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/las-vegas-nevada',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LasVegasNevadaCoolerPageMetadata() {
  return <PageClient />;
}
