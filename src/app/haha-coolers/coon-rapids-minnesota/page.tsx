import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Coon Rapids, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Coon Rapids, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Coon Rapids businesses.',
  keywords: 'haha coolers Coon Rapids, smart vending Coon Rapids Minnesota, grab and go cooler Coon Rapids, cashless vending Coon Rapids',
  openGraph: {
    title: 'Haha Smart Coolers in Coon Rapids, Minnesota',
    description: 'Revolutionary grab & go vending technology for Coon Rapids businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/coon-rapids-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/coon-rapids-minnesota',
  },
};

export default function CoonRapidsMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
