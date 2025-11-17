import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in El Paso, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in El Paso, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for El Paso businesses.',
  keywords: 'haha coolers El Paso, smart vending El Paso Texas, grab and go cooler El Paso, cashless vending El Paso',
  openGraph: {
    title: 'Haha Smart Coolers in El Paso, Texas',
    description: 'Revolutionary grab & go vending technology for El Paso businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/el-paso-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/el-paso-texas',
  },
};

export default function ElPasoTexasCoolerPageMetadata() {
  return <PageClient />;
}
