import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Round Rock, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Round Rock, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Round Rock businesses.',
  keywords: 'haha coolers Round Rock, smart vending Round Rock Texas, grab and go cooler Round Rock, cashless vending Round Rock',
  openGraph: {
    title: 'Haha Smart Coolers in Round Rock, Texas',
    description: 'Revolutionary grab & go vending technology for Round Rock businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/round-rock-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/round-rock-texas',
  },
};

export default function RoundRockTexasCoolerPageMetadata() {
  return <PageClient />;
}
