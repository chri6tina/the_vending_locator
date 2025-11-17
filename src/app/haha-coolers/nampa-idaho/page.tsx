import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Nampa, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Nampa, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Nampa businesses.',
  keywords: 'haha coolers Nampa, smart vending Nampa Idaho, grab and go cooler Nampa, cashless vending Nampa',
  openGraph: {
    title: 'Haha Smart Coolers in Nampa, Idaho',
    description: 'Revolutionary grab & go vending technology for Nampa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/nampa-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/nampa-idaho',
  },
};

export default function NampaIdahoCoolerPageMetadata() {
  return <PageClient />;
}
