import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Passaic, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Passaic, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Passaic businesses.',
  keywords: 'haha coolers Passaic, smart vending Passaic New Jersey, grab and go cooler Passaic, cashless vending Passaic',
  openGraph: {
    title: 'Haha Smart Coolers in Passaic, New Jersey',
    description: 'Revolutionary grab & go vending technology for Passaic businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/passaic-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/passaic-new-jersey',
  },
};

export default function PassaicNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
