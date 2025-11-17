import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Albany, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Albany, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Albany businesses.',
  keywords: 'haha coolers Albany, smart vending Albany Georgia, grab and go cooler Albany, cashless vending Albany',
  openGraph: {
    title: 'Haha Smart Coolers in Albany, Georgia',
    description: 'Revolutionary grab & go vending technology for Albany businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/albany-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/albany-georgia',
  },
};

export default function AlbanyGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
