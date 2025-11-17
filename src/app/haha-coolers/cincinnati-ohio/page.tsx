import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cincinnati, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cincinnati, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cincinnati businesses.',
  keywords: 'haha coolers Cincinnati, smart vending Cincinnati Ohio, grab and go cooler Cincinnati, cashless vending Cincinnati',
  openGraph: {
    title: 'Haha Smart Coolers in Cincinnati, Ohio',
    description: 'Revolutionary grab & go vending technology for Cincinnati businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cincinnati-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cincinnati-ohio',
  },
};

export default function CincinnatiOhioCoolerPageMetadata() {
  return <PageClient />;
}
