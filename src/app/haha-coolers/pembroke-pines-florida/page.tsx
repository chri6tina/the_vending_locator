import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pembroke Pines, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pembroke Pines, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pembroke Pines businesses.',
  keywords: 'haha coolers Pembroke Pines, smart vending Pembroke Pines Florida, grab and go cooler Pembroke Pines, cashless vending Pembroke Pines',
  openGraph: {
    title: 'Haha Smart Coolers in Pembroke Pines, Florida',
    description: 'Revolutionary grab & go vending technology for Pembroke Pines businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pembroke-pines-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pembroke-pines-florida',
  },
};

export default function PembrokePinesFloridaCoolerPageMetadata() {
  return <PageClient />;
}
