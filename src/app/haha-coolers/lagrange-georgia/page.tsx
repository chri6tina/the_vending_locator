import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in LaGrange, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in LaGrange, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for LaGrange businesses.',
  keywords: 'haha coolers LaGrange, smart vending LaGrange Georgia, grab and go cooler LaGrange, cashless vending LaGrange',
  openGraph: {
    title: 'Haha Smart Coolers in LaGrange, Georgia',
    description: 'Revolutionary grab & go vending technology for LaGrange businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lagrange-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lagrange-georgia',
  },
};

export default function LaGrangeGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
