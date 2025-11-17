import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wasilla, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wasilla, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wasilla businesses.',
  keywords: 'haha coolers Wasilla, smart vending Wasilla Alaska, grab and go cooler Wasilla, cashless vending Wasilla',
  openGraph: {
    title: 'Haha Smart Coolers in Wasilla, Alaska',
    description: 'Revolutionary grab & go vending technology for Wasilla businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wasilla-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wasilla-alaska',
  },
};

export default function WasillaAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
