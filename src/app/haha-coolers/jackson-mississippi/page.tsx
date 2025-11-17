import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jackson, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jackson, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jackson businesses.',
  keywords: 'haha coolers Jackson, smart vending Jackson Mississippi, grab and go cooler Jackson, cashless vending Jackson',
  openGraph: {
    title: 'Haha Smart Coolers in Jackson, Mississippi',
    description: 'Revolutionary grab & go vending technology for Jackson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jackson-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jackson-mississippi',
  },
};

export default function JacksonMississippiCoolerPageMetadata() {
  return <PageClient />;
}
