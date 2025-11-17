import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jackson, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jackson, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jackson businesses.',
  keywords: 'haha coolers Jackson, smart vending Jackson Tennessee, grab and go cooler Jackson, cashless vending Jackson',
  openGraph: {
    title: 'Haha Smart Coolers in Jackson, Tennessee',
    description: 'Revolutionary grab & go vending technology for Jackson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jackson-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jackson-tennessee',
  },
};

export default function JacksonTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
