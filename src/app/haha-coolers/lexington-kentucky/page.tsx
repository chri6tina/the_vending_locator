import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lexington, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lexington, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lexington businesses.',
  keywords: 'haha coolers Lexington, smart vending Lexington Kentucky, grab and go cooler Lexington, cashless vending Lexington',
  openGraph: {
    title: 'Haha Smart Coolers in Lexington, Kentucky',
    description: 'Revolutionary grab & go vending technology for Lexington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lexington-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lexington-kentucky',
  },
};

export default function LexingtonKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
