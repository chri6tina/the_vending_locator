import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Reno, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Reno, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Reno businesses.',
  keywords: 'haha coolers Reno, smart vending Reno Nevada, grab and go cooler Reno, cashless vending Reno',
  openGraph: {
    title: 'Haha Smart Coolers in Reno, Nevada',
    description: 'Revolutionary grab & go vending technology for Reno businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/reno-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/reno-nevada',
  },
};

export default function RenoNevadaCoolerPageMetadata() {
  return <PageClient />;
}
