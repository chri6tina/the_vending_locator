import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in El Cerrito, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in El Cerrito, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for El Cerrito businesses.',
  keywords: 'haha coolers El Cerrito, smart vending El Cerrito California, grab and go cooler El Cerrito, cashless vending El Cerrito',
  openGraph: {
    title: 'Haha Smart Coolers in El Cerrito, California',
    description: 'Revolutionary grab & go vending technology for El Cerrito businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/el-cerrito-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/el-cerrito-california',
  },
};

export default function ElCerritoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
