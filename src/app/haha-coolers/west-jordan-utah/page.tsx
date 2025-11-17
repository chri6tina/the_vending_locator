import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Jordan, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Jordan, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Jordan businesses.',
  keywords: 'haha coolers West Jordan, smart vending West Jordan Utah, grab and go cooler West Jordan, cashless vending West Jordan',
  openGraph: {
    title: 'Haha Smart Coolers in West Jordan, Utah',
    description: 'Revolutionary grab & go vending technology for West Jordan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-jordan-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-jordan-utah',
  },
};

export default function WestJordanUtahCoolerPageMetadata() {
  return <PageClient />;
}
