import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mesquite, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mesquite, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mesquite businesses.',
  keywords: 'haha coolers Mesquite, smart vending Mesquite Nevada, grab and go cooler Mesquite, cashless vending Mesquite',
  openGraph: {
    title: 'Haha Smart Coolers in Mesquite, Nevada',
    description: 'Revolutionary grab & go vending technology for Mesquite businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mesquite-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mesquite-nevada',
  },
};

export default function MesquiteNevadaCoolerPageMetadata() {
  return <PageClient />;
}
