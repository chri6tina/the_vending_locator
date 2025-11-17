import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in El Segundo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in El Segundo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for El Segundo businesses.',
  keywords: 'haha coolers El Segundo, smart vending El Segundo California, grab and go cooler El Segundo, cashless vending El Segundo',
  openGraph: {
    title: 'Haha Smart Coolers in El Segundo, California',
    description: 'Revolutionary grab & go vending technology for El Segundo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/el-segundo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/el-segundo-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ElSegundoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
