import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ewa Beach, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ewa Beach, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ewa Beach businesses.',
  keywords: 'haha coolers Ewa Beach, smart vending Ewa Beach Hawaii, grab and go cooler Ewa Beach, cashless vending Ewa Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Ewa Beach, Hawaii',
    description: 'Revolutionary grab & go vending technology for Ewa Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ewa-beach-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ewa-beach-hawaii',
  },
};

export default function EwaBeachHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
