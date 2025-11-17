import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Havre, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Havre, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Havre businesses.',
  keywords: 'haha coolers Havre, smart vending Havre Montana, grab and go cooler Havre, cashless vending Havre',
  openGraph: {
    title: 'Haha Smart Coolers in Havre, Montana',
    description: 'Revolutionary grab & go vending technology for Havre businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/havre-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/havre-montana',
  },
};

export default function HavreMontanaCoolerPageMetadata() {
  return <PageClient />;
}
