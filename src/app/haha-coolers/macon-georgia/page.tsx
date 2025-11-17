import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Macon, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Macon, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Macon businesses.',
  keywords: 'haha coolers Macon, smart vending Macon Georgia, grab and go cooler Macon, cashless vending Macon',
  openGraph: {
    title: 'Haha Smart Coolers in Macon, Georgia',
    description: 'Revolutionary grab & go vending technology for Macon businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/macon-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/macon-georgia',
  },
};

export default function MaconGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
