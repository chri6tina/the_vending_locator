import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kenosha, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kenosha, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kenosha businesses.',
  keywords: 'haha coolers Kenosha, smart vending Kenosha Wisconsin, grab and go cooler Kenosha, cashless vending Kenosha',
  openGraph: {
    title: 'Haha Smart Coolers in Kenosha, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Kenosha businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kenosha-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kenosha-wisconsin',
  },
};

export default function KenoshaWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
