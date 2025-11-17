import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Covington, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Covington, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Covington businesses.',
  keywords: 'haha coolers Covington, smart vending Covington Kentucky, grab and go cooler Covington, cashless vending Covington',
  openGraph: {
    title: 'Haha Smart Coolers in Covington, Kentucky',
    description: 'Revolutionary grab & go vending technology for Covington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/covington-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/covington-kentucky',
  },
};

export default function CovingtonKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
