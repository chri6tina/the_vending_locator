import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mesa, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mesa, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mesa businesses.',
  keywords: 'haha coolers Mesa, smart vending Mesa Arizona, grab and go cooler Mesa, cashless vending Mesa',
  openGraph: {
    title: 'Haha Smart Coolers in Mesa, Arizona',
    description: 'Revolutionary grab & go vending technology for Mesa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mesa-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mesa-arizona',
  },
};

export default function MesaArizonaCoolerPageMetadata() {
  return <PageClient />;
}
