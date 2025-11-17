import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in St. Cloud, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in St. Cloud, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for St. Cloud businesses.',
  keywords: 'haha coolers St. Cloud, smart vending St. Cloud Minnesota, grab and go cooler St. Cloud, cashless vending St. Cloud',
  openGraph: {
    title: 'Haha Smart Coolers in St. Cloud, Minnesota',
    description: 'Revolutionary grab & go vending technology for St. Cloud businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/st-cloud-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/st-cloud-minnesota',
  },
};

export default function StCloudMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
