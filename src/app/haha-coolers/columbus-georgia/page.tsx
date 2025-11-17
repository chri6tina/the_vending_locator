import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Columbus, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Columbus, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Columbus businesses.',
  keywords: 'haha coolers Columbus, smart vending Columbus Georgia, grab and go cooler Columbus, cashless vending Columbus',
  openGraph: {
    title: 'Haha Smart Coolers in Columbus, Georgia',
    description: 'Revolutionary grab & go vending technology for Columbus businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/columbus-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/columbus-georgia',
  },
};

export default function ColumbusGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
