import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Skokie, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Skokie, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Skokie businesses.',
  keywords: 'haha coolers Skokie, smart vending Skokie Illinois, grab and go cooler Skokie, cashless vending Skokie',
  openGraph: {
    title: 'Haha Smart Coolers in Skokie, Illinois',
    description: 'Revolutionary grab & go vending technology for Skokie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/skokie-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/skokie-illinois',
  },
};

export default function SkokieIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
