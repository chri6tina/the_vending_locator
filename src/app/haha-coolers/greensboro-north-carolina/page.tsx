import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Greensboro, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Greensboro, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Greensboro businesses.',
  keywords: 'haha coolers Greensboro, smart vending Greensboro North Carolina, grab and go cooler Greensboro, cashless vending Greensboro',
  openGraph: {
    title: 'Haha Smart Coolers in Greensboro, North Carolina',
    description: 'Revolutionary grab & go vending technology for Greensboro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/greensboro-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/greensboro-north-carolina',
  },
};

export default function GreensboroNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
