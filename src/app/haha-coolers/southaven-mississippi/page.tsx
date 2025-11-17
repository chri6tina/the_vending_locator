import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Southaven, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Southaven, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Southaven businesses.',
  keywords: 'haha coolers Southaven, smart vending Southaven Mississippi, grab and go cooler Southaven, cashless vending Southaven',
  openGraph: {
    title: 'Haha Smart Coolers in Southaven, Mississippi',
    description: 'Revolutionary grab & go vending technology for Southaven businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/southaven-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/southaven-mississippi',
  },
};

export default function SouthavenMississippiCoolerPageMetadata() {
  return <PageClient />;
}
